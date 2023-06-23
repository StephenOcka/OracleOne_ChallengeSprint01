class encode {
  static #swal = {
    class: {
      popup: "swal-popup",
      title: "swal-title",
      input: "swal-input",
      confirmButton: "swal-confirm",
      cancelButton: "swal-deny",
    },
    message: {
      success: (msg) => {
        return Swal.fire({
          position: "top-end",
          icon: "success",
          iconColor: "chartreuse",
          title: msg,
          showConfirmButton: false,
          timer: 1500,
          heightAuto: false,
          customClass: encode.#swal.class,
        });
      },
      warning: (msg) => {
        return Swal.fire({
          icon: "warning",
          iconColor: "yellow",
          title: msg,
          showConfirmButton: true,
          heightAuto: false,
          customClass: encode.#swal.class,
        });
      },
      error: (msg) => {
        return Swal.fire({
          icon: "error",
          iconColor: "red",
          title: msg,
          showConfirmButton: true,
          heightAuto: false,
          customClass: encode.#swal.class,
        });
      },
    },
    pass: (fnResolve) => {
      Swal.fire({
        title: "Enter a password",
        input: "password",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Validar",
        showLoaderOnConfirm: true,
        heightAuto: false,
        customClass: encode.#swal.class,
        preConfirm: (pass) => {
          if (pass.length > 0) {
            fnResolve(pass);
          } else {
            encode.#swal.message.warning("Enter a password.").then(() => {
              encode.#swal.pass(fnResolve);
            });
          }
        },
        allowOutsideClick: () => !Swal.isLoading(),
      });
    },
  };

  static #sanitize(text) {
    const txt = text.replace(/</g, "&#60;").replace(/>/g, "&#62;");
    return txt;
  }

  static #onError() {
    encode.#swal.message.error(
      `The text is invalid, or the password is incorrect.
      Please check the data and try again.`
    );
  }

  static #encrypt(text, pass) {
    return CryptoJS.AES.encrypt(
      encode.#sanitize(text),
      pass.toString(CryptoJS.enc.Hex),
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }
    ).toString();
  }

  static #decrypt(text, pass) {
    let txt;
    try {
      txt = CryptoJS.AES.decrypt(
        encode.#sanitize(text),
        pass.toString(CryptoJS.enc.Hex),
        {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7,
        }
      ).toString(CryptoJS.enc.Utf8);
    } catch (error) {
      encode.#onError();
    }
    return txt;
  }

  static init() {
    const $textarea = document.querySelector("main").querySelector("textarea");
    $textarea.addEventListener("keydown", (event) => {
      const uKey = $textarea.value.charAt($textarea.value.length - 1);
      if (
        (event.code === "Space" && uKey === " ") ||
        (event.code === "Enter" && uKey === "\n")
      ) {
        event.preventDefault();
      }
    });

    const $encrypt = document.getElementById("encrypt");
    $encrypt.addEventListener("click", () => {
      if ($textarea.value.length > 0) {
        encode.#swal.pass((password) => {
          $textarea.value = encode.#encrypt($textarea.value, password);
          encode.#swal.message.success("Encrypted text!");
        });
      } else {
        encode.#swal.message.warning("Enter a text to encrypt.");
      }
    });

    const $decrypt = document.getElementById("decrypt");
    $decrypt.addEventListener("click", () => {
      if ($textarea.value.length > 0) {
        encode.#swal.pass((password) => {
          const txtDecrypt = encode.#decrypt($textarea.value, password);
          if (Boolean(txtDecrypt)) {
            $textarea.value = txtDecrypt;
            encode.#swal.message.success("Decrypted text!");
          } else {
            encode.#onError();
          }
        });
      } else {
        encode.#swal.message.warning("Enter a text to decrypt.");
      }
    });
  }
}

export default encode;
