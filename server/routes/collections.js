var express = require("express");
var router = express.Router();
var collectionsController = require("../controller/collectionController");

/* GET users listing. */
router.get("/", collectionsController.findAll);
router.get("/:name", collectionsController.findByName);
router.get("/count", collectionsController.countToken);
/* POST users listing. */
router.post("/", collectionsController.insertCollection);

module.exports = router;
