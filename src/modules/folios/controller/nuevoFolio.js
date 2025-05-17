const { nuevoFolioService } = require("../services/nuevoFolio");

const nuevoFolio = async (req, res) => {
  const { matricula, cajero, metodoPago, id_servicio } = req.body;

  try {
    if (!matricula || !cajero || !metodoPago || !id_servicio) {
      return res.status(404).json({ error: "Datos faltantes en la solicitud" });
    }
    await nuevoFolioService(matricula, cajero, metodoPago, id_servicio);

    return res.status(200).json({ message: "Folio creado correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  nuevoFolio,
};
