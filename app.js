const express  = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');

//middleware
//使用app.post(...)時須添加
app.use(bodyParser.urlencoded({extended:true}));
//用來放置css靜態文件
app.use(express.static("public"));


app.get("/" , (req , res) => {
    //res.render 解讀ejs檔案 ， 且ejs檔案需放置views資料夾下
    res.render("index.ejs")
});

app.get("*" , (req , res) => {
    res.status(404);
    res.sendFile(path.join(__dirname ,"error.html"));
})

app.listen(3000 , ()=>{
    console.log("Server is running!!!")
})

