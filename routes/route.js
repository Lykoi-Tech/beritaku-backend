const router = require('express').Router();
const apiHandlers = require('../modules/api_handler');

router.get('/', function (_, res) {
  res.json({
    status: 200,
    message: 'Soerat Kabar API successfull running :D'
  });
});

router.post('/users/register', apiHandlers.registerUser);

module.exports = router;
