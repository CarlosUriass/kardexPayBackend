export const paymentDetails = (
  nombre: string,
  folio: string,
  direccion: string,
  nombre_tramite: string,
  costo: number,
  descuento: number,
  total: number
) => {
  return `
    <!--
* This email was built using Tabular.
* For more information, visit https://tabular.email
-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]>-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.t131{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t132{padding-left:30px!important;padding-bottom:40px!important;padding-right:30px!important}.t6{padding-bottom:20px!important}.t5{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t146{padding:40px 30px!important}.t1{padding-bottom:50px!important}.t3{width:80px!important}.t115{padding:30px!important}.t107,.t47,.t63,.t75,.t91{text-align:left!important}.t106,.t42,.t46,.t58,.t62,.t74,.t86,.t90{vertical-align:top!important;width:600px!important}.t43,.t59,.t87{font-size:12px!important;mso-text-raise:4px!important}.t102{vertical-align:top!important;width:200px!important}.t129{width:353px!important}
}
</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;800&amp;family=Inter+Tight:wght@500;700;800&amp;display=swap" rel="stylesheet" type="text/css" />
<!--<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body id="body" class="t152" style="min-width:100%;Margin:0px;padding:0px;background-color:#FFFFFF;"><div class="t151" style="background-color:#FFFFFF;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t150" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#FFFFFF;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#FFFFFF"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t131" style="mso-line-height-rule:exactly;mso-line-height-alt:45px;line-height:45px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t135" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t134" style="width:600px;">
<table class="t133" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t132" style="background-color:#F8F8F8;padding:0 50px 60px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
<table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="130" class="t3" style="width:130px;">
<table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1" style="padding:0 0 60px 0;"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="130" height="130" alt="" src="https://a1c337eb-21b1-458b-9a6e-1d2e355446f8.b-cdn.net/e/c07d492c-5cb6-424d-b42a-7335d661ebb3/5e7a3366-e714-4f80-b535-a5fa12d12bc0.jpeg"/></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t9" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t8" style="width:600px;">
<table class="t7" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t6" style="padding:0 0 15px 0;"><h1 class="t5" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:400;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">${nombre}, gracias por usar KardexPay</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t15" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t14" style="width:600px;">
<table class="t13" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t12" style="padding:0 0 22px 0;"><p class="t11" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Nos complace informarte que <span class="t10" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">tu trámite ha sido procesado exitosamente</span>. Hemos recibido tu solicitud y generado el folio correspondiente. A continuación, encontrarás los detalles de la operación:</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t21" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t20" style="width:600px;">
<table class="t19" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t18"><p class="t17" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t16" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Folio</span></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t26" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t25" style="width:600px;">
<table class="t24" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t23" style="padding:0 0 22px 0;"><p class="t22" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${folio}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t32" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t31" style="width:600px;">
<table class="t30" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t29"><p class="t28" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t27" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">Tu tramite será procesado en:</span></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t37" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t36" style="width:600px;">
<table class="t35" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t34"><p class="t33" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${direccion}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t38" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t118" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t117" style="width:620px;">
<table class="t116" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t115" style="background-color:#FFFFFF;padding:40px 40px 40px 40px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t54" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="420" class="t53" style="width:800px;">
<table class="t52" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t51" style="border-top:1px solid #CCCCCC;padding:20px 0 20px 0;"><div class="t50" style="width:100%;text-align:left;"><div class="t49" style="display:inline-block;"><table class="t48" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t47"><td></td><td class="t42" width="210" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t41" style="width:100%;"><tr><td class="t40"><p class="t39" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#777777;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Nombre del tramite</p></td></tr></table>
</td><td class="t46" width="210" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t45" style="width:100%;"><tr><td class="t44"><p class="t43" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#777777;text-align:right;mso-line-height-rule:exactly;mso-text-raise:2px;">${nombre_tramite}</p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t70" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="420" class="t69" style="width:800px;">
<table class="t68" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t67" style="border-top:1px solid #CCCCCC;padding:20px 0 20px 0;"><div class="t66" style="width:100%;text-align:left;"><div class="t65" style="display:inline-block;"><table class="t64" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t63"><td></td><td class="t58" width="210" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t57" style="width:100%;"><tr><td class="t56"><p class="t55" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Subtotal</p></td></tr></table>
</td><td class="t62" width="210" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t61" style="width:100%;"><tr><td class="t60"><p class="t59" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:right;mso-line-height-rule:exactly;mso-text-raise:2px;">${costo}</p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t82" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="420" class="t81" style="width:800px;">
<table class="t80" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t79" style="padding:0 0 20px 0;"><div class="t78" style="width:100%;text-align:left;"><div class="t77" style="display:inline-block;"><table class="t76" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t75"><td></td><td class="t74" width="420" valign="top">
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t98" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="420" class="t97" style="width:800px;">
<table class="t96" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t95" style="padding:0 0 20px 0;"><div class="t94" style="width:100%;text-align:left;"><div class="t93" style="display:inline-block;"><table class="t92" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t91"><td></td><td class="t86" width="210" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t85" style="width:100%;"><tr><td class="t84"><p class="t83" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#777777;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Descuento</p></td></tr></table>
</td><td class="t90" width="210" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t89" style="width:100%;"><tr><td class="t88"><p class="t87" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#18B53A;text-align:right;mso-line-height-rule:exactly;mso-text-raise:2px;">${descuento}</p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t114" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="420" class="t113" style="width:800px;">
<table class="t112" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t111" style="border-top:1px solid #CCCCCC;padding:20px 0 20px 0;"><div class="t110" style="width:100%;text-align:left;"><div class="t109" style="display:inline-block;"><table class="t108" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t107"><td></td><td class="t102" width="105" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t101" style="width:100%;"><tr><td class="t100"><p class="t99" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:44px;font-weight:800;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:left;mso-line-height-rule:exactly;mso-text-raise:6px;">Total</p></td></tr></table>
</td><td class="t106" width="315" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t105" style="width:100%;"><tr><td class="t104"><p class="t103" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:44px;font-weight:800;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:right;mso-line-height-rule:exactly;mso-text-raise:6px;">${total}</p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t120" style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t124" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t123" style="width:600px;">
<table class="t122" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t121"><p class="t119" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Da click en botón debajo para consultar el estado de tu tramite</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t125" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
<table class="t130" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="250" class="t129" style="width:250px;">
<table class="t128" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t127" style="overflow:hidden;background-color:#f3f3f3;text-align:center;line-height:24px;mso-line-height-rule:exactly;mso-text-raise:2px;padding:10px 10px 10px 10px;border-radius:44px 44px 44px 44px;"><a class="t126" href="https://tabular.email" style="display:block;margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#333333;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;" target="_blank">cONSULTAR TRAMITE</a></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t149" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t148" style="width:600px;">
<table class="t147" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t146" style="background-color:#242424;padding:48px 50px 48px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t140" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t139" style="width:600px;">
<table class="t138" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t137"><p class="t136" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:800;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">KardexPay</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t145" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t144" style="width:600px;">
<table class="t143" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t142"><p class="t141" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Hecho con ❤️ por estudiantes de ingenieria</p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>
    `;
};
