require('dotenv').config()
const logger = require('../lib/logger')
const app = require('../../server/main')
const Printer = require('./Printer')
const path = require('path')
const fs = require('fs')
const pdf = require('html-pdf')
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const chokidar = require('chokidar')
const FaceApiClient = require('./FaceApiClient')
const cheerio = require('cheerio')

const printer = new Printer('http://192.168.1.56:631')

const {FACEAPI_KEY, FACEAPI_ENDPOINT, FACEAPI_GROUP} = process.env

const faceApiClient = new FaceApiClient(FACEAPI_ENDPOINT, FACEAPI_KEY, FACEAPI_GROUP)

let ioSocket

function exportToJpeg (path) {
  var html = fs.readFileSync('./printout.html', 'utf8')
  var options = { viewportSize: { width: 900, height: 1350 }, type: 'jpeg' }
  return new Promise((resolve, reject) => {
    var fileName = 'print-' + Date.now() + '.jpg'
    pdf.create(html, options).toFile('./public/printouts/' + fileName, () => {
      resolve(fileName)
    })
  })
}

const watcher = chokidar.watch('../../Pictures/Photobooth/*.JPG', {
  ignoreInitial: true,
  awaitWriteFinish: true
})

// const printWatcher = chokidar.watch('printout.html', {
//   persistent: true,
//   ignoreInitial: true
// })

// printWatcher.on('change', () => {
//   exportToJpeg().then(() => console.log('done jpeg'))
// })

function getPhotoName () {
  let names = ['photo1.JPG', 'photo2.JPG', 'photo3.JPG']
  for (let i = 0; i < 3; i++) {
    if (!fs.existsSync(`./public/photos/${names[i]}`)) {
      return names[i]
    }
  }
  return 'extra.JPG'
}

function wipePhotos () {
  const directory = './public/photos'

  let files = fs.readdirSync(directory)
  for (const file of files) {
    if (file !== '.gitkeep') {
      fs.unlinkSync(path.join(directory, file))
    }
  }
}

function clearHtml () {
  const $ = cheerio.load(fs.readFileSync('./printout.html'))
  $('.twitter').empty()
  fs.writeFile('./printout.html', $.root().html(), () => { console.log('wrote to printout.html') })
}

wipePhotos()
clearHtml()

let debouncePhotoName

watcher.on('add', (path) => {
    // console.log('DEBOUNCE PHOTONAME', debouncePhotoName)
  if (debouncePhotoName === path) {
    return
  }
  debouncePhotoName = path
    // console.log('!!!!!!!!!!!!!!!!', `${path} has been added!!`)
  let photoName = getPhotoName()
  let writeStream = fs.createWriteStream(`./public/photos/${photoName}`)
  let readStream = fs.createReadStream(path)

  readStream
      .pipe(writeStream)

  readStream.on('end', () => {
    ioSocket.emit('action', { type: 'message', data: { name: 'client/newPhoto', payload: { photoName } } })
    if (photoName === 'photo1.JPG') {
      faceApiClient.identify(`./public/photos/${photoName}`)
        .then(data => data
          .map(face => face.candidates[0])
          .filter(cand => cand)
          .map(person => person.personId)
        )
        .then(faceApiClient.getPersonsInfo.bind(faceApiClient))
        .then(personsInfo => {
          const personsData = personsInfo.map(info => ({
            name: info.name,
            userData: JSON.parse(info.userData)
          }))
          const $ = cheerio.load(fs.readFileSync('./printout.html'))
          $('.twitter').html(personsData.map(person => `<p>${person.userData.twitter}</p>`).join(''))
          fs.writeFile('./printout.html', $.root().html(), () => { console.log('wrote to printout.html') })
          ioSocket.emit('action', { type: 'message', data: { name: 'client/foundPersons', payload: personsData } })
        })
    }
  })
})

io.on('connection', (socket) => {
  ioSocket = socket

  socket.on('action', (action) => {
    if (action.type === 'socket/wipePhotos') {
      wipePhotos()
      clearHtml()
    }

    if (action.type === 'socket/startPrint') {
      console.log('Got Start print')
      let generatedFileName

      exportToJpeg()
      .then((fileName) => {
        generatedFileName = fileName
        return printer.isConnected()
      })
      .then((connected) => {
        if (connected) {
          return printer.printPhoto('./public/printouts/' + generatedFileName)
        } else {
          socket.emit('action', { type: 'message', data: { name: 'client/printerConnectStatus', payload: false } })
        }
      })
      .then((res) => {
        console.log(res)
      })
      .catch((data) => {
        console.log(data)
      })

      socket.emit('action', { type: 'message', data: 'woot!' })
    }

    if (action.type === 'socket/checkPrinter') {
      printer.isConnected()
        .then((connected) => {
          socket.emit('action', { type: 'message', data: { name: 'client/printerConnectStatus', payload: connected } })
        })
    }
  })
})

logger.info('Starting server...')
server.listen(3000, () => {
  logger.success('Server is running at http://localhost:3000')
})
