const getFecha = () => {
  const ahora = new Date();

  const fechaHora = ahora.toLocaleString("es-MX", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return fechaHora;
};

module.exports = {
  getFecha,
};
