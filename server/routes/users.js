var express = require('express');
var router = express.Router();
var userController = require('../controller/userController')

// const mysqlConnObj = require('../config/db');
// const mysqlConn = mysqlConnObj.init();
// mysqlConnObj.open(mysqlConn);

router.get('/users',userController.findAll);
router.post('/users', userController.insertUser);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
