// importar el esquema de servicios
 const Servicio = require("express");

  const createService = async (req, res) => {
    const body = req.body;
  
    try {

      const servicio = new Servicio(body);
      const servicioAlmacenado = await servicio.save();

      return res.status(201).json({
      ok: true,
      msg: "Servicio creado correctamente",
      data: servicio,
    });

  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error creando el servicio",
      error: error.message,
    });
  }
};

 const getAllService = async (req, res) => {
    const body = req.body;
  
    try {

        //accede a la base de datos para crear el servicio. AWAIT ES por latencia en la conexion
        const servicios = await servicio.find({});

        if(servicios){
            
            return res.status(200).json({
            ok: true,
            msg: "Servicio listado correctamente",
            data: servicios
        });

        }else{
              return res.status(404).json({
              ok:false,
              message:"Servicio no encontrado "
        })
        }

    }catch (error) {
      return res.status(500).json({
        ok: false,
        msg: "Error contacte con el administrador",
        error: error.message,
      });
  }
};

const getServiceById = async (req, res) => {
    const {id}=req.params;
  
    try {

        //accede a la base de datos para crear el servicio. AWAIT ES por latencia en la conexion
        const servicioPorId = await servicio.findById(id);

        if(servicioPorId){
            
            return res.status(200).json({
            ok: true,
            msg: "Servicio encontrado",
            data: servicioPorId
        });

        }else{
              return res.status(404).json({
              ok:false,
              message:"Servicio no encontrado "
        })
        }

    }catch (error) {
      return res.status(500).json({
        ok: false,
        msg: "Error contacte con el administrador",
        error: error.message,
      });
  }
};

const updateServiceById = async (req, res) => {
    const {id}=req.params;
    const body=req.body

    try {

        //accede a la base de datos para crear el servicio. AWAIT ES por latencia en la conexion
        const servicioActualizado = await servicio.findById(id);

        if(servicioActualizado){
            
            return res.status(200).json({
            ok: true,
            msg: "Servicio modificado",
            data: servicioPorId
        });

        }else{
              return res.status(404).json({
              ok:false,
              message:"Servicio no encontrado "
        })
        }

    }catch (error) {
      return res.status(500).json({
        ok: false,
        msg: "Error contacte con el administrador",
        error: error.message,
      });
  }
};


const deleteServiceById = async (req, res) => {
    const {id}=req.params;
  
    try {

        //accede a la base de datos para crear el servicio. AWAIT ES por latencia en la conexion
        const servicioEliminado = await servicio.findByIdAndDelete(id);

        if(servicioEliminado){
            
            return res.status(200).json({
            ok: true,
            msg: "Servicio encontrado",
            data: servicioEliminado
        });

        }else{
              return res.status(404).json({
              ok:false,
              message:"Servicio no encontrado "
        })
        }

    }catch (error) {
      return res.status(500).json({
        ok: false,
        msg: "Error contacte con el administrador",
        error: error.message,
      });
  }
};

module.exports={
  createService,
  getAllService,
  getServiceById,
  updateServiceById, 
  deleteServiceById
}
