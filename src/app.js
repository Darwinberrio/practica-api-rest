const express = require("express");
const cors = require("cors");
require('dotenv').config()

const {connection} = require ('./configs/dbconnect.js')

// console.log(process.env.PORT, 'prueba env')

// Importaciones
const app = express();
const port = process.env.PORT || 3000

connection()

// Middleware
app.use(cors());
app.use(express.json());
app.get('/dashboard', (req, res) => { res.send('Administrador')});
app.use(express.urlencoded());


/* RUTAS de servicios*/
app.use("/api/v1", require("./routes/servicios.route"));
app.use('/api/v1/auth', require('./routes/user.route'))

// listener
app.listen(port, () => {
    console.log(`Servidor a la escucha del puerto ${port} `);
});



