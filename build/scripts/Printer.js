const ipp = require('ipp')
const fs = require('fs')

const Printer = function (uri) {
  this.uri = uri
  this.printer = ipp.Printer(uri, {
    uri: uri
  })
}

Printer.prototype.isConnected = function () {
  return new Promise((resolve) => {
    this.getStatus()
      .then(() => {
        resolve(true)
      })
      .catch(() => {
        resolve(false)
      })
  })
}

Printer.prototype.getStatus = function () {
  var message = {
    'operation-attributes-tag': {
      'attributes-charset': 'utf-8',
      'attributes-natural-language': 'en',
      'printer-uri': this.uri
    }
  }

  return new Promise((resolve, reject) => {
    this.printer.execute('Get-Printer-Attributes', message, (err, res) => {
      if (err) {
        reject(err)
      }
      if (res) {
        resolve(res.statusCode)
      }
    })
  })
}

Printer.prototype.printPhoto = function (path) {
  const data = fs.readFileSync(path)
  var message = {
    'operation-attributes-tag': {
      'requesting-user-name': 'hao',
      'job-name': 'photobooth',
      'document-format': 'image/jpeg'
    },
    data: data
  }

  return new Promise((resolve, reject) => {
    this.printer.execute('Print-Job', message, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
}

module.exports = Printer
