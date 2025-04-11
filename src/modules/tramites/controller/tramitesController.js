const { Servicios } = require("../models/tramitesModel");

const obtenerTramites = async (req, res) => {
  try {
    const allTramites = await Servicios.findAll();

    res.status(200).json({
      allTramites,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error ocurred on the server" });
  }
};

module.exports = {
  obtenerTramites,
};
