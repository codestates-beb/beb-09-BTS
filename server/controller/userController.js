const express = require('express');
const User = require('../model/user');

exports.findAll = function (req,res){
    User.findAll(function (err,users){
        console.log("controller");
        if(err) res.send(err);
        console.log("res",users);
        res.send(users);
    })
}

exports.insertUser = function (req,res){
    const new_user = new User(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400)
            .send({error:true, message : "Please provide all required field"});
    }else{
        User.insertUser(new_user, function (err,user){
            console.log("controller");
            if(err) res.send(err);
            console.log("user : ",user);
            res.json({
                data:user,
            })
        })
    }
}