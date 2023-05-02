const mongoose = require("mongoose");
const validator = require("validator");


// Creating Students Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength:3
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    phone:{
        type: Number,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required:true
    }
})

//Creating Collection/Model from Student's Schema
const Student = new mongoose.model(`Student`, studentSchema);

module.exports= Student;