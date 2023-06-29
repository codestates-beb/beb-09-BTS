var express = require('express');
var router = express.Router();
var itemsController = require('../controller/itemController')

/* GET users listing. */
router.get('/',itemsController.findAll);
router.get('/count',itemsController.countItem);
/* POST users listing. */
router.post('/', itemsController.insertItem);

module.exports = router;
