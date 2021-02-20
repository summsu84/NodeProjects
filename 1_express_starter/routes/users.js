var express = require('express');
var router = express.Router();
var request = require('request-promise-native');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {

  const URL = 'http://localhost:38999/smvc/test';
  const param = '{"member_no":"3044536"}';
  const options = {
    method: 'post',
    form: `jsonData=${encodeURIComponent(JSON.stringify(param))}`,
    url: URL,
    json: true,
  };
  request(options).then(
      console.log("error")
  )


  res.send('respond with a resource');
});

module.exports = router;
