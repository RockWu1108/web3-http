const express  = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//middleware
//使用app.post(...)時須添加
app.use(bodyParser.urlencoded({extended:true}));
//用來放置css靜態文件
app.use(express.static("public"));


app.get("/" , (req , res) => {
    res.sendFile(path.join(__dirname , "index.html"));
});

app.get("/Alex" , (req , res) => {
    res.send("Alex Page");
});

app.get("/Rock" , (req , res) => {
    res.status(302);
    res.sendFile(path.join(__dirname , "moved.html"));
});

app.post("/formHandling" , (req , res) => {
    let {fullname , age} = req.body;
    console.log(req.body);
    res.send(`Thanks for handling! Name : ${fullname} , Age : ${age}`);
})

app.get("*" , (req , res) => {
    res.status(404);
    res.sendFile(path.join(__dirname ,"error.html"));
})

app.listen(3000 , ()=>{
    console.log("Server is running!!!")
})

