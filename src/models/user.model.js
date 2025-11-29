const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    nombre:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true,
        default:'user'

    }
    
})  

module.exports = model('User',UserSchema)