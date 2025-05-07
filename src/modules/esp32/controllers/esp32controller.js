function receiveData(req, res) {
  let { amount } = req.body;

  amount = parseInt(amount);
  // Obtener clientes WebSocket desde app
  const clients = req.app.get("wssClients");

  // Enviar a todos los clientes conectados
  clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(
        JSON.stringify({
          from: "ESP32",
          amount,
          message: "pago recibido",
        })
      );
    }
  });

  return res.status(200).json({
    status: "ok",
    amount,
  });
}

module.exports = {
  receiveData,
};
