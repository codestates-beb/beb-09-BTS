var express = require('express');
var router = express.Router();
var attributesController = require('../controller/attributeController')

/* GET users listing. */
router.get('/',attributesController.findAll);
router.get('/attribute',attributesController.countItem);
router.get('/:id',attributesController.findById);
/* POST users listing. */
router.post('/', attributesController.insertItem);

module.exports = router;