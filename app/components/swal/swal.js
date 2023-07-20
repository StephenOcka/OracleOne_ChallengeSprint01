const theme = {
  popup: "swal-popup",
  title: "swal-title",
  input: "swal-input",
  confirmButton: "swal-confirm",
  cancelButton: "swal-deny",
};

const message = {
  success: (msg) => {
    return Swal.fire({
      position: "top-end",
      icon: "success",
      iconColor: "chartreuse",
      title: msg,
      showConfirmButton: false,
      timer: 1500,
      heightAuto: false,
      customClass: theme,
    });
  },
  warning: (msg) => {
    return Swal.fire({
      icon: "warning",
      iconColor: "yellow",
      title: msg,
      showConfirmButton: true,
      heightAuto: false,
      customClass: theme,
    });
  },
  error: (msg) => {
    return Swal.fire({
      icon: "error",
      iconColor: "red",
      title: msg,
      showConfirmButton: true,
      heightAuto: false,
      customClass: theme,
    });
  },
};

function pass(fnResolve) {
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
    customClass: theme,
    preConfirm: (pass) => {
      if (pass.length > 0) {
        fnResolve(pass);
      } else {
        swal.message.warning("Enter a password.").then(() => {
          swal.pass(fnResolve);
        });
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
  });
}

const swal = {
  pass,
  message,
};

export default swal;
