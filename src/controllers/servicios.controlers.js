import { Servicio } from "../models/Servicio.model.js";

export const crearServicio = async (req, res) => {
  try {
    const servicio = await Servicio.create(req.body);
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

// Obtener todos los servicios
export const obtenerServicios = async (_req, res) => {
  try {
    const servicios = await Servicio.find().lean();
    return res.status(200).json({
      ok: true,
      msg: "Lista de servicios",
      data: servicios,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error obteniendo los servicios",
      error: error.message,
    });
  }
};

