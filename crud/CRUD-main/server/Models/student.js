const mongoose = require('mongoose')


const studentschema = new mongoose.Schema
({

    Name: 
    {
        type: String,
        required: true
    },
    // Dob:
    // {
    //    type:Date,
        // required: true
    // },
    Roll_No:
    {
        type:Number,
        required:true
    },
    Sub: 
   {
        type: Boolean,
        required: true,
        default: false
    },
    Branch: 
    {
        type: String,
        required: true
    },
    Section:
    {
        type: Number,
        required: true
    },
    Year: 
    {
        type: Number,  
        required: true
    }
})
module.exports=mongoose.model('Student',studentschema)


