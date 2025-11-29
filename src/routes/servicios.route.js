const express = require("express");
const router = express.Router();

const {check, validationResult}= require('express-validator');

const {  createService,
  getAllService,
  getServiceById,
  updateServiceById, 
  deleteServiceById} = require("../controllers/servicios.controlers");
const { validateImputs } = require("../middlewares/validateImputs");

// GET ALL SERVICES
router.get('/', getAllService)

router.get('/:id', getServiceById)

router.post('/crearServicio',[
    check('nombre', 'Debes escribir el nombre ').not().isEmpty().isLength({ min:2, max: 10 }),
    check('nombre', 'Debes escribir un email correcto ').isEmail(),
    check('descripcion', 'Debes -escribir la descripcion').not().isEmpty(),
    check('precio', 'Debes introducir el precio').not().isEmpty()
    .isInt({ min:1, max: 2000}).withMessage('Debes introducir un precio entre 1 y 2000'),
    validateImputs
], createService) 


router.put('/:id', updateServiceById) 

router.delete('/:id', deleteServiceById)

module.exports = router;

