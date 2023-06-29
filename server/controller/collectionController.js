const express = require('express');
const Collection = require('../model/colletcion');

exports.findAll = function (req,res){
    Collection.findAll(function (err,collections){
        console.log("controller");
        if(err) res.send(err);
        console.log("res",collections);
        res.send(collections);
    })
}

exports.countToken = function (req,res){
    Collection.countToken(function (err,count){
        console.log("controller");
        if(err) res.send(err);
        console.log("res",count);
        res.send(count);
    })
}

exports.insertCollection = function (req,res){
    const new_collection = new Collection(req.body.data);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400)
            .send({error:true, message : "Please provide all required field"});
    }else{
        Collection.insertCollection(new_collection, function (err,collection){
            console.log("controller");
            if(err) res.send(err);
            console.log("user : ",collection);
            res.json({
                data:collection,
            })
        })
    }
}

