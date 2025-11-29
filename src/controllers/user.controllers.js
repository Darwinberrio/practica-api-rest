const User=require('../models/User.model');

//modulo para encriptar contraseña
const bcrypt=require('bcryptjs')

const {JWTGenerator}=require('../helpers/jwt')

const createUser = async (req, res) =>{
   try {
        const {name,email,password}=req.body

        // buscamos por email para ver que el usuario existe
        const Exists = await User.findOne({email})
        
        // verificamos si el usuario existe
        if (Exists) {
            return res.status(400).json({
                ok:false,
                msg:'Usuario ya existe'
            })
        }

        //ENCRIPTACION 
        const salt=bcrypt.genSaltSync() 
        const hashedPassword=bcrypt.hashSync(password,salt);


        // crear usuario (con la password hasheada)
        const userToSave= {
            name,
            email,
            password:hashedPassword
        }

        //instanciamos user
        const user= new User(userToSave) 

        //creamos el usuario
        const usercreate = await user.save();

        //payload para el token
        const payload={
            uid:usercreate._id, 
            name:usercreate.name,
            role:usercreate.role
        }

        const token=await JWTGenerator(payload)

        return res.status(200).json({
            ok:true,
            msg:'Usuario registrado con exito',
            //data:usuarioCreado,
            token:token //token generado
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            ok:false,
            msg:'Contacte con el administrador'
        })
    }
} 


const loginUser = async (req, res) =>{
    try {
        const {email,password}=req.body

        // buscamos por email para ver que el usuario existe
        const Exists = await User.findOne({email})
        

        // verificamos si el usuario existe
        if (!Exists) {
            return res.status(400).json({
                ok:false,
                msg:'Email no registrado'
            })
        }
        // comparamos las contraseñas
        const passwordOk=bcrypt.compareSync(password,Exists.password )

        //si las contraseñas no coinciden da error 401
        if(!passwordOk){
            return res.status(401).json({ //401 unathorized
                ok:false,
                msg:'La contraseña no es valida'
            })
        }

        //payload para el token
        const payload={
            uid:Exists._id, 
            name:Exists.name,
            role:Exists.role
        }

        const token=await JWTGenerator(payload)

        //req.headers.authorization=`${token}`

        //Comprobacion que exista en headers
        //console.log("Header seteado desde login:",req.headers.authorization)

        return res.status(200).json({
            ok:true,
            msg:'Usuario Logeado con Exito',
            user:Exists,
            token:token
        })

    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg:'Contacte con el administrador'
        })
    }
}

const renewToken = async (req, res) =>{
     try {

        //Recoge el requerimiento        
         const payload={
            //uid:req.uid,
            name:req.name,
            role:req.role
        }
        
        //generamos de nuevo token
        const newtoken= await JWTGenerator(payload)

        //retorna status OK
        return res.status(200).json({
            ok:true,
            msg:'Token renewed',
            user:{
                uid:payload.uid,
                name:payload.name
            },
            newtoken
        })

    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg:'Contacte con el administrador'
        })
    }
}

module.exports = {
    createUser,
    loginUser,
    renewToken
}