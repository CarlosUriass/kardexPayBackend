const { getFecha } = require("../../utils/date");
const { convertirCantidadEnPesos } = require("../../utils/string");

function imprimirTicket(
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
) {
  printer.font("B");
  printer.align("ct");
  printer.size(1, 1);
  printer.text(universidad);
  printer.text(facultad);
  printer.size(0, 0);
  printer.text(direccion);

  printer.text("=======================================================");
  printer.align("lt");
  printer.text("REFERENCIA");
  printer.text(alumno);
  printer.text("=======================================================");
  printer.text("DESCRIPCION         CANT.           IMPORTE");
  printer.text(tramite);
  printer.text(
    "                      " + cantidad + "                  " + importe
  );
  printer.align("rt");
  printer.text("------------------------------");
  printer.text("TOTAL:                      " + total);
  printer.text("DESCUENTO:                   " + descuento);

  printer.align("ct");
  printer.text("\n");

  const numeroEnTexto = convertirCantidadEnPesos(total);
  printer.text("SON: " + numeroEnTexto);
  printer.text("\n");
  printer.text("FOLIO: " + folio);
  const fecha = getFecha();

  printer.align("ct");
  printer.qrimage(
    "https://github.com/carlosuriass", // ! CAMBIAR A LA RUTA DEL ENDPOINT PARA VERIFICAR EL ESTATUS DEL FOLIO
    { type: "png", size: 10 },
    function (err) {
      if (err) {
        console.error("Error al imprimir el código QR:", err);
      } else {
        printer.text("Escanea para ver el estado del tramite");
        printer.text("\n");

        printer.cut();
        printer.close();
      }
    }
  );

  printer.text(fecha);
  printer.text("\n");
}

module.exports = {
  imprimirTicket,
};
