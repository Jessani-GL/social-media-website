// export default function validate(values) {
  
//     let errors = {};
//     // if (!values.firstName && !values.lastName && !values.email && !values.password) {
//     //     errors.all = "Must include one or more changes to submit changes";
//     // }

//   //   if (values.firstName === undefined && values.lastName === undefined && values.email === undefined&& values.password === undefined) {
//   //     errors.all = "Must include one or more changes to submit changes";
//   // }

//     if (!/\S+@\S+\.\S+/.test(values.email) && values.email !== undefined) {
//       errors.email = "Email address is invalid";
//     }
   
  
//     if (values.password !== undefined && values.password.length < 8) {
//       errors.password =
//         "Password must be 8 or more characters, contains a number and special character";
//     } else if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(values.password)) {
//       errors.password = "Password must contain a number and special character";
//     }
  
//     if (!/^[a-zA-Z ]+$/.test(values.firstName)) {
//       errors.firstName = "Name invalid, please use letters only";
//     }
//     ///^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/
//     if (!/^[a-zA-Z ]+$/.test(values.lastName)) {
//       errors.lastName = "Name invalid, please use letters only";
//     }
//     return errors;
//   }
  
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
  ///^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/
  if (!values.lastName) {
    errors.lastName = "Last name is required";
  } else if (!/^[a-zA-Z ]+$/.test(values.lastName)) {
    errors.lastName = "Name invalid, please use letters only";
  }
  return errors;
}
