const express = require('express');
const Attribute = require("../model/attribute");

exports.findAll = function (req,res){
    Attribute.findAll(function (err,attribute){
        if(err) res.send(err);
        console.log("res",attribute);
        res.send(attribute);
    })
}

exports.findById = function (req,res){
    Attribute.findById(req.params.id,function (err,attribute){
        if(err) res.send(err);
        res.json(attribute)
    })
}

exports.countItem = function (req,res){
    Attribute.countToken(function (err,count){
        if(err) res.send(err);
        res.send(count);
    })
}

exports.insertItem = function (req,res){
    const new_attribute = new Attribute(req.body.data);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400)
            .send({error:true, message : "Please provide all required field"});
    }else{
        Attribute.insertCollection(new_attribute, function (err,attribute){
            if(err) res.send(err);
            res.json({
                data:attribute,
            })
        })
    }
}

