const mysql = require('mysql');
require('dotenv').config();

const mysqlConnection = {
    init:function (){
        return mysql.createConnection({
            host:process.env.MYSQL_HOST,
            port:process.env.MYSQL_PORT,
            user:process.env.MYSQL_USER,
            password:process.env.MYSQL_PASSWORD,
            database:process.env.MYSQL_DATABASE
        });
    },
    open:function (conn){
        conn.connect(function (err){
            if(err){
                console.error("MySQL connection failed");
                console.error("Error Code : " + err.code);
                console.error("Error Message : " + err.message);
            }else{
                console.log("MySQL connection successful");
            }
        });
    }
    ,
    close:function (conn){
        conn.end(function (err){
            if(err){
                console.error("MySQL Terminate failed");
                console.error("Error Code : "+err.code);
                console.error("Error Message : "+err.message);
            }else{
                console.log("MySQL Terminate connection");
            }
        });
    }
};

module.exports = mysqlConnection;