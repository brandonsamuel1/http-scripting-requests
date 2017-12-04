var https = require('https');

module.exports = function getHTML (requestOptions, callback) {
  var text = '';
  https.get(requestOptions, function(response) {
    response.setEncoding('utf-8');
    response.on('data', function(data) {
      text += data;
    })
    response.on('end', function() {
      callback(text);
    })
  })
};