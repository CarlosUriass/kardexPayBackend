const convertirNumeroALetras = (numero: number): string => {
  const unidades: string[] = [
    "",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];

  const especiales: string[] = [
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
    "dieciséis",
    "diecisiete",
    "dieciocho",
    "diecinueve",
  ];

  const decenas: string[] = [
    "",
    "",
    "veinte",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa",
  ];

  const centenas: string[] = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos",
  ];

  if (numero === 0) return "cero";

  let texto = "";

  if (numero >= 1000) {
    const miles = Math.floor(numero / 1000);
    texto += miles === 1 ? "mil" : `${convertirNumeroALetras(miles)} mil`;
    numero %= 1000;
    if (numero > 0) texto += " ";
  }

  if (numero >= 100) {
    const centena = Math.floor(numero / 100);
    texto += centena === 1 && numero % 100 === 0 ? "cien" : centenas[centena];
    numero %= 100;
    if (numero > 0) texto += " ";
  }

  if (numero >= 10 && numero < 20) {
    texto += especiales[numero - 10];
    return texto;
  }

  if (numero >= 20) {
    const decena = Math.floor(numero / 10);
    texto += decenas[decena];
    numero %= 10;
    if (numero > 0) texto += " y ";
  }

  if (numero > 0 && numero < 10) {
    texto += unidades[numero];
  }

  if (texto === "uno") {
    texto = "un";
  }

  return texto;
};

export const convertirCantidadEnPesos = (cantidad: number | string): string => {
  const numero = typeof cantidad === "string" ? parseFloat(cantidad) : cantidad;
  if (isNaN(numero)) {
    throw new TypeError(`Cantidad inválida: ${cantidad}`);
  }

  const [parteEntera, parteDecimal] = numero.toFixed(2).split(".");
  const pesos = parseInt(parteEntera, 10);
  const centavos = parseInt(parteDecimal, 10);

  let resultado =
    pesos === 1
      ? `${convertirNumeroALetras(pesos)} peso`
      : `${convertirNumeroALetras(pesos)} pesos`;

  if (centavos > 0) {
    resultado += ` con ${convertirNumeroALetras(centavos)} centavos`;
  }

  return resultado.charAt(0).toUpperCase() + resultado.slice(1);
};
