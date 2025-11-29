const { default: mongoose, Types } = require("mongoose");

const { model, Schema } = require("mongoose");
const Servicio = new Schema({

    nombre:{
        type: String,
        unique: true,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
    },
    precio:{
        type: String,
        required: true,
    }, 
    email:{
        type: String,
        required: true,
    }
})

module.exports = model("servicio", Servicio)
