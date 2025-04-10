const { sequelize } = require("../../plugins");

/**
 * Establishes a connection to the database using Sequelize.
 *
 * This function attempts to authenticate the database connection.
 * If the connection is successful, it logs a confirmation message.
 * If an error occurs, it logs the error and throws it.
 *
 * @async
 * @function connectDataBase
 * @throws {Error} Throws an error if the connection fails.
 *
 * @example
 * const { connectDataBase } = require("./config/db/connectDataBase");
 * connectDataBase()
 *   .then(() => console.log("Database connected"))
 *   .catch(err => console.error("Database connection error", err));
 */
const connectDataBase = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "✅ Connection to the database has been established successfully."
    );
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
    throw error;
  }
};

module.exports = {
  connectDataBase,
};
