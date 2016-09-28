var axios = require('axios')

var exports = module.exports = {};

exports.get = function(arg){
  console.log('arg ' + arg);

  axios.get('http://localhost:3000/message')
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
}

exports.post = function(arg){
  console.log('post ' + arg);
}
