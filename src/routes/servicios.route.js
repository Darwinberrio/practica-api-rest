const express = require("express");
const router = express.Router();


// GET ALL SERVICES
router.get('/servicios', async (req, res) => {
    try {
        let data;
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(respuesta)

        if (respuesta.ok) {
            data = await respuesta.json()
            console.log(data)
        }

        res.render('servicios.ejs', {
            servicios: data
        })

    } catch (error) {
        console.log(error)
    }

})

module.exports = router;

