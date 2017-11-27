var ipp = require('ipp')
var fs = require('fs')

var uri = 'http://192.168.1.56:631'

// var data = ipp.serialize({
//   'operation': 'Get-Printer-Attributes',
//   'operation-attributes-tag': {
//     'attributes-charset': 'utf-8',
//     'attributes-natural-language': 'en',
//     'printer-uri': uri
//   }
// })

// ipp.request(uri, data, function (err, res) {
//   if (err) {
//     return console.log(err)
//   }
//   console.log(JSON.stringify(res, null, 2))
// })

fs.readFile('print.jpg', function (err, data) {
  if (err) console.error(err)

  var printer = ipp.Printer(uri, {
    uri: uri
  })

  var message = {
    'operation-attributes-tag': {
      'requesting-user-name': 'hao',
      'job-name': 'photobooth',
      'document-format': 'image/jpeg'
    },
    data: data
  }

  console.log('pdf read. Starting print')

  printer.execute('Print-Job', message, (err, res) => {
    if (err) {
      console.error(err)
    }
    console.log(res)
      // {
  //   version: '2.0',
  //   statusCode: 'successful-ok',
  //   id: 27209415,
  //   'operation-attributes-tag':
  //     {
  //       'attributes-charset': 'utf-8',
  //       'attributes-natural-language': 'en-us'
  //     },
  //     'job-attributes-tag':
  //     { 'job-uri': 'http://192.168.1.56:631',
  //       'job-id': 5,
  //       'job-state': 'processing',
  //       'job-state-reasons': 'job-printing' }
  //    }
  })
})
