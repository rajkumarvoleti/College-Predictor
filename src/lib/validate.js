import Swal from "sweetalert2";

export function Swal_error(error_name) {
  if (error_name === "seat") error_name = "gender";
  Swal.fire({
    title: "Error!",
    text: `Please fill the ${error_name} input properly`,
    icon: "error",
    confirmButtonText: "Ok",
  });
}

export function Swall_success() {
  Swal.fire({
    title: "Success",
    icon: "success",
    confirmButtonText: "Ok",
  });
}

export default function validate(inputs) {
  let isValid = true;

  // checking for error
  Object.entries(inputs).forEach((input) => {
    if (input[1].length === 0) {
      Swal_error(input[0]);
      isValid = false;
    }
  });

  if (isValid) Swall_success();
  return isValid;
}
