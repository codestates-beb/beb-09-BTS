const mysql = require('../config/db');

let Item = function (item){
    this.tokenId = item.tokenId;
    this.address = item.address;
    this.discription = item.discription;
    this.ipfs = item.ipfs;
    this.name = item.name;
}

Item.findAll = function (result){
    var sql = "select * from items";
    mysql.query(sql, function (err,res){
        if(err){
            console.log("err :",err);
            result(null,err);
        }else{
            console.log("items : ",res);
            result(null,res);
        }
    })
}

Item.countItem = function (result){
    var sql = "select count(*) from items";
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

Item.insertItem = function (newEmp,result){
    var sql = "insert into items set ?";

    mysql.query(sql,newEmp,function (err,res){
        if(err){
            console.log("err :",err);
            result(err,null);
        }else{
            result(null,newEmp.Items);
        }
    })

}
module.exports = Item;