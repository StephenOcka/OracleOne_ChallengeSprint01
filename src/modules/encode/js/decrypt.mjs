import sanitize from "./sanitize.mjs";

export default function (text, pass) {
  let txt;
  try {
    txt = CryptoJS.AES.decrypt(sanitize(text), pass.toString(CryptoJS.enc.Hex), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
  } catch (error) {
    swal.message.error(messageError);
  }
  return txt;
}
