import message from "./message.mjs";

export default function (fnResolve) {
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
        message.warning("Enter a password.").then(() => {
          swal.pass(fnResolve);
        });
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
  });
}
