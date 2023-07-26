import swal from "../swal/swal.mjs";
import decrypt from "./js/decrypt.mjs";
import encrypt from "./js/encrypt.mjs";

const messageError = `The text is invalid, or the password is incorrect.
Please check the data and try again.`;

export default function () {
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
