var https = require('https');

function getData(url) {
  return new Promise(function(resolve, reject) {
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

      let rawData = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => { 
        rawData += chunk; 
      });

      res.on('end', () => {
        resolve(rawData);
      });

    }).on('error', (e) => {
      reject(`Got error: ${e.message}`);
    });
  });
};

module.exports = { getData }