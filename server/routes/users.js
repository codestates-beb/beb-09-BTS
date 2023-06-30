var express = require('express');
var router = express.Router();
var userController = require('../controller/userController')


/* GET users listing. */
router.get('/',userController.findAll);
/* POST users listing. */
router.post('/', userController.insertUser);
module.exports = router;
