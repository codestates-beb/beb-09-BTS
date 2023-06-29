const mysql = require('../config/db');

let Pinata = function (pinata){
    this.address = pinata.address;
    this.name = pinata.name;
    this.desc=pinata.desc;
    this.category=pinata.category;
    this.img=pinata.img;
}

Pinata.getMetaData = function (data,result){

    console.log("models");
    result(null,data);

}

module.exports = Pinata;