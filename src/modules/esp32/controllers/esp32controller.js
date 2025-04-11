function receiveData(req, res) {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Falta el campo "message"' });
  }

  console.log("Mensaje recibido desde ESP32:", message);

  // Aquí puedes agregar lógica para guardar en base de datos, etc.

  return res.status(200).json({
    status: "ok",
    received: message,
  });
}

module.exports = {
  receiveData,
};
