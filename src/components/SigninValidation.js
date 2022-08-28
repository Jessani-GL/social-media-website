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
  
    return errors;
  }
  