import Swal from "sweetalert2";

export const showErrorAlert = (
  message: string,
  callback?: () => void
): void => {
  Swal.fire({
    title: "Error!",
    html: message,
    icon: "error",
  }).then((result) => {
    if (result.isConfirmed && callback) {
      callback();
    }
  });
};

export const showSuccessAlert = (
  message: string,
  callback?: () => void
): void => {
  Swal.fire({
    title: "Success!",
    text: message,
    icon: "success",
  }).then((result) => {
    if (result.isConfirmed && callback) {
      callback();
    }
  });
};

export const showCustomAlert = (
  title: string,
  message: string,
  icon: "success" | "error" | "warning" | "info" | "question",
  callback?: () => void
): void => {
  Swal.fire({
    title: title,
    text: message,
    icon: icon,
  }).then((result: any) => {
    if (result.isConfirmed && callback) {
      callback();
    }
  });
};
