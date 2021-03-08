const mongoose = require('mongoose');

const employee = new mongoose.Schema({
    name : {
        type: String,
        required: [true , "You forget to enter the name"],
        maxLength:[15 , "name is too long"]
    } , 
    age : {
        type : Number,
        required: true,
        default : 18
    },
    major : {
        type : String , 
        default : "AA",
        enum : [ "Chinese" , "Math" , "Science" , "Law"]
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