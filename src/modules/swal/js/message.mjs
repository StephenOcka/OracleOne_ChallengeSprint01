const theme = {
  popup: "swal-popup",
  title: "swal-title",
  input: "swal-input",
  confirmButton: "swal-confirm",
  cancelButton: "swal-deny",
};

export default {
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
