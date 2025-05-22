import escpos from "escpos";
import USB from "escpos-usb";
import { IPrinterAdapter } from "./IPrinterAdapater";

// Asigna el adaptador USB
escpos.USB = USB;

export class UsbPrinterAdapter implements IPrinterAdapter {
  private device: any;
  private printer: any;
  private isMock: boolean = false;

  constructor() {
    const devices = USB.findPrinter();

    if (devices.length === 0) {
      // No hay impresora conectada: activar modo mock
      this.isMock = true;
      this.device = {
        open: (cb: (err: null) => void) => cb(null),
      };
      this.printer = {
        text: (txt: string) => console.log("[MOCK] print text:", txt),
        cut: () => console.log("[MOCK] cut"),
        close: () => console.log("[MOCK] close"),
      };
    } else {
      this.device = new escpos.USB();
      this.printer = new escpos.Printer(this.device, { encoding: "GB18030" });
    }
  }

  async print(content: (printer: any) => Promise<void>): Promise<void> {
    return new Promise((resolve, reject) => {
      this.device.open(async (error: any) => {
        if (error) return reject(error);

        try {
          await content(this.printer);
          if (!this.isMock) {
            this.printer.cut();
            this.printer.close();
          }
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    });
  }
}
