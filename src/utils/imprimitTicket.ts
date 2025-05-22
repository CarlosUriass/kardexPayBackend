import { getFecha } from "./getFecha";
import { convertirCantidadEnPesos } from "./num-text";

export function imprimirTicketEscpos(
  printer: any,
  universidad: string,
  facultad: string,
  direccion: string,
  alumno: string,
  tramite: string,
  cantidad: number,
  importe: number,
  total: number,
  descuento: number,
  folio: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      printer
        .font("B")
        .align("ct")
        .size(1, 1)
        .text(universidad)
        .text(facultad)
        .size(0, 0)
        .text(direccion)

        .text("=======================================================")
        .align("lt")
        .text("REFERENCIA")
        .text(alumno)
        .text("=======================================================")
        .text("DESCRIPCION         CANT.           IMPORTE")
        .text(tramite)
        .text(
          "                      " +
            cantidad +
            "                  " +
            importe.toFixed(2)
        )
        .align("rt")
        .text("------------------------------")
        .text("TOTAL:                      " + total.toFixed(2))
        .text("DESCUENTO:                   " + descuento.toFixed(2))

        .align("ct")
        .text("\n");

      const numeroEnTexto = convertirCantidadEnPesos(total);
      printer.text("SON: " + numeroEnTexto);
      printer.text("\n");
      printer.text("FOLIO: " + folio);

      const fecha = getFecha();

      printer.qrimage(
        "https://github.com/carlosuriass",
        { type: "png", size: 10 },
        function (err: any) {
          if (err) {
            return reject(err);
          }

          printer.text("Escanea para ver el estado del trámite");
          printer.text("\n");
          printer.text(fecha);
          printer.text("\n");

          printer.cut();
          printer.close(() => {
            resolve();
          });
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}
