const messageError = `The text is invalid, or the password is incorrect.
Please check the data and try again.`;

function sanitize(text) {
  const txt = text.replace(/</g, "&#60;").replace(/>/g, "&#62;");
  return txt;
}

function encrypt(text, pass) {
  return CryptoJS.AES.encrypt(sanitize(text), pass.toString(CryptoJS.enc.Hex), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
}

const swal = await import("./swal/swal.js").then((resolve) => resolve.default);

function decrypt(text, pass) {
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

function encode() {
  const $textarea = document.querySelector("main").querySelector("textarea");
  $textarea.addEventListener("keydown", (event) => {
    const uKey = $textarea.value.charAt($textarea.value.length - 1);
    if ((event.code === "Space" && uKey === " ") || (event.code === "Enter" && uKey === "\n")) {
      event.preventDefault();
    }
  });

  const $encrypt = document.getElementById("encrypt");
  $encrypt.addEventListener("click", () => {
    if ($textarea.value.length > 0) {
      swal.pass((password) => {
        $textarea.value = encrypt($textarea.value, password);
        swal.message.success("Encrypted text!");
      });
    } else {
      swal.message.warning("Enter a text to encrypt.");
    }
  });

  const $decrypt = document.getElementById("decrypt");
  $decrypt.addEventListener("click", () => {
    if ($textarea.value.length > 0) {
      swal.pass((password) => {
        const txtDecrypt = decrypt($textarea.value, password);
        if (Boolean(txtDecrypt)) {
          $textarea.value = txtDecrypt;
          swal.message.success("Decrypted text!");
        } else {
          swal.message.error(messageError);
        }
      });
    } else {
      swal.message.warning("Enter a text to decrypt.");
    }
  });
}

export default encode;
