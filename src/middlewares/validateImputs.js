const { validationResult } = require("express-validator")

// middleware a ejectuar en routes
const validateImputs = (req, res, next) => {

    const errors = validationResult(req)

        console.log(errors.isEmpty())

        if(!errors.isEmpty()){
            return res.status(400).json({
                ok: false,
                errors: errors.mapped()
            })
        } 

}

module.exports ={
    validateImputs
}