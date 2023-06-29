const mysql = require('../config/db');

let Attribute = function (item){
    this.tokenId = item.tokenId;
    this.traitType = item.traitType;
    this.value = item.value;
}

Attribute.findAll = function (result){
    var sql = "select * from attributes";
    mysql.query(sql, function (err,res){
        if(err){
            console.log("err :",err);
            result(null,err);
        }else{
            console.log("attributes : ",res);
            result(null,res);
        }
    })
}

Attribute.findById = function (id,result){
    var sql = "select * from attributes where tokenId = ?";
    mysql.query(sql,id, function (err,res){
        if(err){
            console.log("err :",err);
            result(err,null);
        }else{
            console.log("attributes : ",res);
            result(null,res);
        }
    })
}

Attribute.countAttribute = function (result){
    var sql = "select count(*) from attributes";
    mysql.query(sql, function (err,res){
        if(err){
            console.log("err :",err);
            result(null,err);
        }else{
            console.log("count : ",res);
            result(null,res);
        }
    })
}

Attribute.insertAttribute = function (newEmp,result){
    var sql = "insert into attribute set ?";

    mysql.query(sql,newEmp,function (err,res){
        if(err){
            console.log("err :",err);
            result(err,null);
        }else{
            result(null,newEmp.Attributes);
        }
    })
}
module.exports = Attribute;