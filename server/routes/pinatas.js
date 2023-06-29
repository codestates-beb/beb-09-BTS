var express = require('express');
var router = express.Router();
var pinataController = require('../controller/pinataController')

/* POST users listing. */
router.post('/',pinataController.getMetaData);

module.exports = router;