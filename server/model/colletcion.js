const mysql = require('../config/db');

let Collection = function (collection){
    this.contractAddress = collection.contractAddress;
    this.ownerAddress = collection.ownerAddress;
    this.name = collection.name;
}

Collection.findAll = function (result){
    var sql = "select * from collections";
    mysql.query(sql, function (err,res){
        if(err){
            console.log("err :",err);
            result(null,err);
        }else{
            console.log("collections : ",res);
            result(null,res);
        }
    })
}

Collection.countToken = function (result){
    var sql = "select count(*) from collections";
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

Collection.insertCollection = function (newEmp,result){
    var sql = "insert into collections set ?";

    mysql.query(sql,newEmp,function (err,res){
        if(err){
            console.log("err :",err);
            result(err,null);
        }else{
            result(null,newEmp.Collections);
        }
    })
}

Collection.changeOwner = function (newEmp,result){
    var sql = "update collections set ownerAddress = ? where contractAddress = ?;";

    mysql.query(sql,newEmp,function (err,res){
        if(err){
            console.log("err :",err);
            result(err,null);
        }else{
            console.log("newEmp",newEmp);
            result(null,newEmp);
        }
    })


}
module.exports = Collection;