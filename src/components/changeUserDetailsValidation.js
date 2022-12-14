  
export default function validate(values) {
  // SIMILAR TO ERRORS. , ADD ONE FOR CORRECT

  let errors = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.firstName) {
    errors.firstName = "First name is required";
  } else if (!/^[a-zA-Z ]+$/.test(values.firstName)) {
    errors.firstName = "Name invalid, please use letters only";
  }
  
  if (!values.lastName) {
    errors.lastName = "Last name is required";
  } else if (!/^[a-zA-Z ]+$/.test(values.lastName)) {
    errors.lastName = "Name invalid, please use letters only";
  }
  return errors;
}
