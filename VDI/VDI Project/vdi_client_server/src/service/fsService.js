var fs = require('fs');
var jsonFilePath = '/config.json';
/**
 * @function odduuServerIPSetUp
 * @param {string} ip 
 * @param {string} clientName 
 * @param {string} id 
 */
export const odduuServerIPSetUp = (ip, clientName, id) => {
  return new Promise(function(resolve, reject) {
    fs.readFile(jsonFilePath, 'utf8', function(err, data) {
      if(err) {
        console.error('Error -> FS-Service File -> Read File  ', err);
        return reject(err)
      }
      var obj  = JSON.parse(data);
      obj['odduu_server_ip'] = ip;
      obj['clientName'] = clientName;
      obj['clientId'] = id;
      var json = JSON.stringify(obj);
      fs.writeFile(jsonFilePath, 'utf8', function(err) {
        if(err) {
          console.error('Error -> FS-Service File -> Write File -> ', err);
        }
        resolve({result:true})
      })
    })
  })
}
