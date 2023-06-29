var express = require('express');
var router = express.Router();
var fs = require('fs');
const multer = require('multer');

require('dotenv').config();
const pinataSDK = require('@pinata/sdk')
const pinata = new pinataSDK(
    process.env.API,
    process.env.SECRET
)

var storage =multer.diskStorage({
    destination: function (req, file,cb){
        cb(null, "uploads/");
    },
    filename: function (req, file, cb){
        cb(null, file.originalname);
    }
})

var upload = multer({storage});

router.post('/',upload.single('file'), function (req, res, next){

    const options = {
        pinataMetadata:{
            name:req.file.filename,
        },
        pinataOptions:{
            cidVersion:0
        }
    }
    const readbleStreamForFile = fs.createReadStream('./uploads/'+req.file.filename);
    pinata.pinFileToIPFS(readbleStreamForFile,options).then((result)=>{
        const result_ = result.IpfsHash;
        res.send(result_);
    }).catch((err)=>{
        console.log(err);
    });
})



module.exports = router;