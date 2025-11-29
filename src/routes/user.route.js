const express = require('express')
const router = express.Router()

const {verifyToken,verifyRole}=require('../middlewares/authMiddleware')


// importar controladores
const { createUser, loginUser, renewToken }= require('../controllers/user.controllers')

// REGISTER
    router.post('/new', [/*[verifyRole]*/], createUser)

// LOGIN
    router.post('/', [/*[validación]*/ ], loginUser)

// RENEWTOKEN
    router.get('/renew', [verifyToken], renewToken)


module.exports = router
