const cron = require("node-cron");
const { generateCryptoKey } = require("../crypto/generate-crypto-key.plugin");

const renewCryptoKey = () => {
  cron.schedule("*/30 * * * *", () => {
    return generateCryptoKey();
  });
};

module.exports = {
  renewCryptoKey,
};
