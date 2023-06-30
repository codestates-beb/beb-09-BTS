const express = require('express');
const Pinata = require('../model/pinata');

require('dotenv').config();
const pinataSDK = require('@pinata/sdk')
const pinata = new pinataSDK(
    process.env.API,
    process.env.SECRET
)

exports.getMetaData = function (req,res){
    const data = new Pinata(req.body.data);
    console.log(data);
    Pinata.getMetaData(data,function (err,pin){
        if(err) res.send(err);
        console.log(pin);
        const options = {
            pinataMetadata:{
                name:pin.name,
            },
            pinataOptions:{
                cidVersion:0
            }
        }
        pinata.pinJSONToIPFS(data,options).then((result)=>{
            res.send(result);
        }).catch((err)=>{
            console.log(err);
        });

    })
}