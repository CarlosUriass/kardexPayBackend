export interface IPrinterAdapter {
  print(content: (printer: any) => Promise<void>): Promise<void>;
}
