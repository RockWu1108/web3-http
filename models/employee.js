const mongoose = require('mongoose');

const employee = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    } , 
    age : {
        type : Number,
        required: true,
        default : 18
    },
    major : {
        type : String , 
        default : "AA",
    },
    scholarShip:{
        merit :{
            type :Number ,
            default : 0,
        },
        other : {
            type : Number ,
            default : 0,
        }
    }
});

module.exports = mongoose.model("Employee" , employee);