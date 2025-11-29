const isAdmin = ((req, res, next) => {

    if (req.body.isAdmin==true){
        next()
    } else {
        res.status(403).send(`Lo sentimos no puede acceder a ${req.url}`)
    }
})


module.exports = { isAdmin }