import "../App.css";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";
import { useState } from 'react';

import useForm from "../components/useForm";
import validate from "../components/SigninValidation";
import { useLocation, useNavigate } from "react-router-dom";
import {addUsers} from '../data/repository'

function Signup(props) {
  const navigate = useNavigate();
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const myprofile = useLocation();
  // const [email,  setEmail] =  useState('');
  // const [password, setPassword] = useState('');

  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

   function login() {

    

    //  I NEED TO CONVERT FIRST NAME AND LAST NAME INTO LOWERCASE THEN REPLACE FIRST LETTER WITH CAPS
    addUsers(values.firstName, values.lastName, values.email, values.password);
    console.log("No errors, submit callback called!");
    console.log("Go to next page with a sign in success notification");

    props.loginUser(values.email);
    // alert('success')
    // const users = JSON.parse(localStorage.getItem("users") || "[]");
    // const user = {
    //   email: values.email,
    //   password: values.password,
    // };

    // users.push(user);
    // localStorage.setItem("users", JSON.stringify(users));
    // console.log(localStorage.getItem("users"));
   
    // event.preventDefault();
    navigate('/myprofile');


    // if (myprofile.state?.from) {
    //         navigate(myprofile.state.from);
    //       }
    //       console.log('hell o')


    //     return;
//    function success() {
//     if (myprofile.state?.from) {
//       navigate(myprofile.state.from);
//     }
//     console.log('hell o')
//    }
//     return (
//       // success()
//       <div className="main-box-large">
// <p>AJEBFKESJFBKSJEFBNJKHSEBFk</p>
// console.log('hell o')
//       </div>
      
//     );
  }

  return (
    <div className="">
      {/* ///////////////// MAIN SECTION ///////////////// */}
      <div className="main-box-large">
        <div className="container-xl fs-6 ">
          <br></br>
          <div className="main-box custom-card">
            <p className="fs-3 fw-bold mb-5">Sign up</p>
            {/* FORM */}

            <div className="container-sm fs-6">

            <div className="form-floating mb-4 " style={{ color: "#000" }}>
                <input
                  type="text"
                  name="firstName"
                  className={`form-control ${
                    errors.firstName && "validationCustom03"
                  }`}
                  autoComplete="off"
                  id="floatingInput"
                  onChange={handleChange}
                  value={values.firstName}
                  required
                ></input>
                <label for="floatingInput">First name</label>
                {errors.firstName && (
                  <p className="text-danger">{errors.firstName}</p>
                )}
              </div>

            <div className="form-floating mb-4 " style={{ color: "#000" }}>
                <input
                  type="text"
                  name="lastName"
                  className={`form-control ${
                    errors.lastName && "validationCustom03"
                  }`}
                  autoComplete="off"
                  id="floatingInput"
                  onChange={handleChange}
                  value={values.lastName}
                  required
                ></input>
                <label for="floatingInput">Last name</label>
                {errors.lastName && (
                  <p className="text-danger">{errors.lastName}</p>
                )}
              </div>

              <div className="form-floating mb-4 " style={{ color: "#000" }}>
                <input
                  type="text"
                  name="email"
                  className={`form-control ${
                    errors.email && "validationCustom03"
                  }`}
                  autoComplete="off"
                  id="floatingInput"
                  onChange={handleChange}
                  value={values.email}
                  required
                ></input>
                <label for="floatingInput">Email address</label>
                {errors.password && (
                  <p className="text-danger">{errors.email}</p>
                )}
              </div>

              <div class="form-floating mb-4" style={{ color: "#000" }}>
                <input
                  type="password"
                  name="password"
                  className={`form-control ${
                    errors.password && "validationCustom03"
                  }`}
                  id="floatingPassword"
                  onChange={handleChange}
                  value={values.password}
                  required
                ></input>
                <label for="floatingPassword">Password</label>
                {errors.password && (
                  <p className="text-danger">{errors.password}</p>
                )}
              </div>
            </div>

            <button
              type="button"
              className="btn btn-light mb-4"
              onClick={handleSubmit}
              noValidate
            >
              Submit
            </button>

            <text className="text-muted fs-6">Already have a account? </text>
          </div>{" "}
        </div>

        {/* end of CONTAINER */}
      </div>{" "}
      {/* end of MAIN */}
    </div>
  );
}

export default Signup;
