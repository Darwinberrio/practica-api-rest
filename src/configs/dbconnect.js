
const mongoose = require('mongoose');


const connection = async {} => {

  try {
    const response = await mongoose.connect(process.env.DB_URI).

    console.log(' Conectado a la base de datos mongo');
    return response

  } catch (error) {

    console.log(error) 
    return {
        ok:false,
        msg: 'Error al conectar con la base de datos'
    
    }
}
