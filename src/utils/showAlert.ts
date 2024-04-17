import Swal from "sweetalert2";

export function showSuccessAlert(message: string) {
  Swal.fire({
    title: message,
    icon: "success",
    showConfirmButton: false,
    timer: 1500,
  });
}

export function showFailedAlert(message: string) {
  Swal.fire({
    title: message,
    icon: "error",
    showConfirmButton: false,
    timer: 1500,
  });
}
