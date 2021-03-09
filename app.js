const express  = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Employee = require('./models/employee');
//connect to mongoose 

mongoose.connect("mongodb://localhost:27017/mydatabase",
{useNewUrlParser:true , useUnifiedTopology:true})
.then(() =>{
    console.log("Connect Success !!!!");
}).catch((err) =>{
    console.log("Connect Failed." , err);
})

//添加資料到mongoDB
const EP1 = new Employee({
    name : "rock",
    age : 26,
    major : "Chinese",
    scholarShip :{
        merit : 4000,
        other : 799
    }
});

//使用 setOtherToZero static methods
Employee.setOtherToZero().then((msg) =>{
    console.log(msg)
}).catch((err) =>{
    console.log(err)
})

Employee.find({}).then((data)=>{
    console.log(data);
})

//  // 使用schema中定義的function()
// Employee.findOne({name :"Amy"}).then((data)=>{
//     let result = data.totalScholarShip();
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })
// //delete scholarShip.merit >=9000的一筆資料
// Employee.deleteOne({"scholarShip.merit":{$gte : 9000}}).then((msg) =>{
//     console.log(msg);
// })

// //修改mongoDB符合條件中的一筆資料
// Employee.updateOne({name : "Rock"} , {age : 30}).then(() =>{
//     console.log("Udpate Success!!!");
// }).catch((err) =>{
//     console.log("Update error!!!");
// })

// //查詢並同時修改條件資料
// Employee.findOneAndUpdate({name : "Rock"} , {
//     scholarShip :{
//     merit : 100000,
//     other : 400000
// }},{new:true}).then((msg)=>{
//     console.log(msg);
// })


// //找出mongoDb所有符合資料(return array)
// Employee.find().then((data) =>{
//     console.log(data);
// })

// //找出mongoDb符合的其中一筆資料(return object)
// Employee.findOne({name : "Alex"}).then((data) =>{
//     console.log(data);
// // })

// EP1.save().then(()=>{
//   console.log("Save Success");
// }).catch((err)=>{
//    console.log(err);
// })



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

