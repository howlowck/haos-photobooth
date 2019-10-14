const express = require('express')
const fileUpload = require('express-fileupload')
// const logger = require('../build/lib/logger')
const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 }
}))

app.get('/', (req, res) => {
  res.json({ message: 'the photo server only accepts POST requests' }, 401)
})

app.post('/', (req, res) => {
  const photo = req.files.photo
  const uploadPath = 'image_captures/image_' + Date.now() + '.JPG'
  photo.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).send(err)
    }

    res.send('File uploaded to ' + uploadPath)
  })
})

module.exports = app
