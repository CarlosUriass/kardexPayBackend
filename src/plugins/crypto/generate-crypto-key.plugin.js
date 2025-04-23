const crypto = require("crypto");

const generateCryptoKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

module.exports = {
  generateCryptoKey,
};
