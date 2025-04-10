require("dotenv").config();

/**
 * Retrieves an environment variable's value.
 *
 * If the variable is not defined, it returns the provided default value.
 *
 * @param {string} key - The name of the environment variable.
 * @param {string [defaultValue=undefined]} - The default value to return if the variable is not set.
 * @returns {string|number|boolean|undefined} The value of the environment variable or the default value.
 *
 * @example
 * const dbHost = getEnv("DB_HOST");
 * console.log(dbHost); // Output: 'undefined' if DB_HOST is not set
 */
const getEnv = (key, defaultValue = undefined) => {
  return process.env[key] || defaultValue;
};

module.exports = {
  getEnv,
};
