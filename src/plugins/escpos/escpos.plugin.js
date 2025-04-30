const escpos = require("../lib/escpos/escpos");
escpos.USB = require("../lib/escpos/escpos-usb");

const device = new escpos.USB();
const options = { encoding: "ISO-8859-15" };
const printer = new escpos.Printer(device, options);

module.exports = {
  device,
  printer,
};
