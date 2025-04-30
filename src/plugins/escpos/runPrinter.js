const { device, printer } = require("./escpos.plugin");
const { imprimirTicket } = require("./ticket");

function ejecutarImpresion(
  universidad,
  facultad,
  direccion,
  alumno,
  tramite,
  cantidad,
  importe,
  total,
  descuento,
  folio
) {
  device.open((error) => {
    if (error) {
      console.error("Error al abrir el dispositivo", error);
      return;
    }

    imprimirTicket(
      printer,
      universidad,
      facultad,
      direccion,
      alumno,
      tramite,
      cantidad,
      importe,
      total,
      descuento,
      folio
    );
  });
}

module.exports = {
  ejecutarImpresion,
};
