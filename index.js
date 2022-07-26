const express = require("express")
const app = express()
const port= 4000;
const mysql=require("mysql")

//connection setup
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Anukar1@",
    database:"karthik"
})

connection.connect(error=>{
    if(error)   console.log(error)
    else        console.log("Database is connected successfully")
})

app.get("/",(req,res)=>{
    res.send("Hi we are connecting with MySql")
})

app.get("/retrieve",(req,res)=>{
    connection.query("select * from salesperson",(err,result)=>{
        if(err){ console.log(err)}
        else{
            console.log(result)
            return res.json(result)
        }
    })
})
app.listen(port,()=>{console.log("server is running on",port)})