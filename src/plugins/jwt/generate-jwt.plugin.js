const jwt = require("jsonwebtoken");
const { getEnv } = require("../dotenv/dotenv.plugin");

/**
 * Generates a JSON Web Token (JWT) using the provided payload and expiration time.
 *
 * @param {Object} payload - The data to encode into the JWT.
 * @param {string|number} expirationTime - Expiration time for the token (e.g., "1h", "2d", 3600).
 * @returns {string} The signed JWT as a string.
 */
const generateJWT = (payload, expirationTime) => {
  return jwt.sign(payload, getEnv("JWTSECRETKEY"), {
    expiresIn: expirationTime,
  });
};

module.exports = {
  generateJWT,
};
