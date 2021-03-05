const express  = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//connect to mongoose 

mongoose.connect("mongodb://localhost:27017/mydatabase",
{useNewUrlParser:true , useUnifiedTopology:true})
.then(() =>{
    console.log("Connect Success !!!!");
}).catch((err) =>{
    console.log("Connect Failed." , err);
})


//middleware
//使用app.post(...)時須添加
app.use(bodyParser.urlencoded({extended:true}));
//用來放置css靜態文件
app.use(express.static("public"));


app.get("/" , (req , res) => {
    //res.render 解讀ejs檔案 ， 且ejs檔案需放置views資料夾下
    res.render("index.ejs")
});

app.get("/:name" , (req , res)=>{
    let {name} = req.params;
    res.render("person.ejs" , { name}) // 第二個物件參數將值傳至ejs模板中使用
})

app.get("*" , (req , res) => {
    res.status(404);
    res.sendFile(path.join(__dirname ,"error.html"));
})

app.listen(3000 , ()=>{
    console.log("Server is running!!!")
})

