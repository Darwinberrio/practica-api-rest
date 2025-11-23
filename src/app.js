const express = require("express");
require('gotenv').config()

const { connection } = require ('./configs/dbconnect')


const app = express()
const por = process.env.PORT

app.use(express.static(__dirname + "/public"))
app.set('view engine', 'ejs')
app.set("views", __dirname + "/views");

/* RUTAS */

app.get('/', (req, res) => {

    res.render('inicio.ejs')

})

app.use("/", require("./routes/servicios.route"));


app.listen(port, () => {
    console.log(`Servidor a la escucha del puerto ${port} `);
});



