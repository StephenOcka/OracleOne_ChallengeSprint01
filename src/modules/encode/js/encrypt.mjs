import sanitize from "./sanitize.mjs";

export default function (text, pass) {
  return CryptoJS.AES.encrypt(sanitize(text), pass.toString(CryptoJS.enc.Hex), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
}
