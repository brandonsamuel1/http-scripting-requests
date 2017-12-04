var https = require('https');

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
};

function getAndPrintHTMLChunks (requestOptions) {

  var text = '';
  https.get(requestOptions, function(response) {
    response.setEncoding('utf-8');
    response.on('data', function(data) {
      text += data
      console.log(text)
    })
  })
}
getAndPrintHTMLChunks(options)