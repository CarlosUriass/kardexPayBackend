# Patch para `escpos-usb`: evitar `TypeError: usb.on is not a function`

## 💥 Problema

Al ejecutar el proyecto, se producía el siguiente error:

```
TypeError: usb.on is not a function
```

Este error ocurre porque en algunos entornos el objeto `usb` no implementa el método `.on()`, lo que provoca que al intentar suscribirse al evento `"detach"` se rompa la ejecución.

## 🔧 Solución

Se modificó el archivo `node_modules/escpos-usb/index.js` para agregar una verificación previa antes de llamar `usb.on(...)`.

### Código original:

```js
usb.on("detach", function (device) {
  if (device == self.device) {
    self.emit("detach", device);
    self.emit("disconnect", device);
    self.device = null;
  }
});
```

### Código con el patch aplicado:

```js
if (typeof usb.on === "function") {
  usb.on("detach", function (device) {
    if (device == self.device) {
      self.emit("detach", device);
      self.emit("disconnect", device);
      self.device = null;
    }
  });
}
```

## ✅ Resultado

Con esta verificación, el código evita ejecutar `.on()` cuando no está disponible, eliminando el error y permitiendo que el adaptador USB funcione correctamente en entornos donde `usb.on` no está definido.
