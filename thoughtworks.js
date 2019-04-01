let rp = require('request-promise');

const URL = 'https://http-hunt.thoughtworks-labs.net';

const print =(data)=>{
  console.log(data);
}

const get=(path)=>{
  var options = {
    url: URL+path,
    headers: {
      'userId': 'aKMUGWAGc'
    }
  };
  return rp(options).then(data=>JSON.parse(data));
}

const post = (path, body) => {
  var options = {
    method: 'POST',
    url: URL + path,
    headers: {
      'userId': 'aKMUGWAGc'
    },
    body,
    json: true
  };
  return rp(options).then(data => data);
}

// get('/challenge').then(data=>print(data)).error(error=>print(error));

get('/challenge/input').then(data => {
  let output = {};


  output.count = data.length;
  print(data)
  print(output);
  post('/challenge/output',output)
  .then(post=> print(post))
  .catch(error=> print(error));

}).catch(error=>print(error));