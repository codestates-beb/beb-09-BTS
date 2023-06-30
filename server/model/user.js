"use strict";

const mysql = require('../config/db');

let User = function (user){
    this.address = user.address;
}

User.findAll = function (result){
    var sql = "select * from users";
    mysql.query(sql, function (err,res){
        if(err){
            console.log("err :",err);
            result(null,err);
        }else{
            console.log("address : ",res);
            result(null,res);
        }
    })
}

User.insertUser = function (newEmp,result){
    var sql = "insert into users set ?";
    mysql.query(sql,newEmp,function (err,res){
        if(err){
            console.log("err :",err);
            result(err,null);
        }else{
            result(null,newEmp.address);
        }
    })


}
module.exports = User;