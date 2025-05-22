import escpos from "escpos";
import USB from "escpos-usb";
import { IPrinterAdapter } from "./IPrinterAdapater";

escpos.USB = USB;
export class UsbPrinterAdapter implements IPrinterAdapter {
private device: any;
private printer: any;

constructor() {
this.device = new escpos.USB();
this.printer = new escpos.Printer(this.device, { encoding: "GB18030" });
}

async print(content: (printer: any) => Promise<void>): Promise<void> {
return new Promise((resolve, reject) => {
this.device.open(async (error: any) => {
if (error) return reject(error);

        try {
          await content(this.printer);
          this.printer.cut();
          this.printer.close();
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    });

}
}
