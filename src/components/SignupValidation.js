export default function validate(values) {
  // Signup validation

  let errors = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password =
      "Password must be 8 or more characters, contains a number and special character";
  } else if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(values.password)) {
    errors.password = "Password must contain a number and special character";
  }

  if (!values.firstName) {
    errors.firstName = "First name is required";
  } else if (!/^[a-zA-Z ]+$/.test(values.firstName)) {
    errors.firstName = "Name invalid, please use letters only";
  }
  ///^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/
  if (!values.lastName) {
    errors.lastName = "Last name is required";
  } else if (!/^[a-zA-Z ]+$/.test(values.lastName)) {
    errors.lastName = "Name invalid, please use letters only";
  }
  return errors;
}
