const mongoose = require('mongoose');

const employee = new mongoose.Schema({
    name : String , 
    age : Number ,
    major : String , 
    scholarShip:{
        merit :Number ,
        other : Number
    }
});

module.exports = mongoose.model("Employee" , employee);