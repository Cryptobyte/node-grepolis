var https = require('https');
var zlib = require('zlib');

/**
 * This function sends a request to the server endpoint 
 * and decompresses the gzip compressed data before 
 * passing it back in a Promise
 * @param {*} url Url to the data to fetch
 */
function getData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const { statusCode } = res;

      let error;

      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
      }
  
      if (error) {
        console.error(error.message);
        res.resume();
        return;
      }

      var gunzip = zlib.createGunzip();
      res.pipe(gunzip);

      var buffer  = '';
      gunzip.on('data', function (data) {
        buffer += data;

      }).on('end', function () {
        resolve(buffer);

      }).on('error', function (e) {
        reject(e)
      });
    })
  });
}

module.exports = { getData }