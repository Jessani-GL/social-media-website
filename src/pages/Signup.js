import "../App.css";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from 'react';

import  useForm from '../components/useForm';
import  validate from '../components/SigninValidation';


function Signup() {

  // const [email,  setEmail] =  useState('');
  // const [password, setPassword] = useState('');

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  function login() {
    console.log('No errors, submit callback called!');
    console.log('Go to next page with a sign in success notification');
  }

  // function handleSignup() {
  //   const users = JSON.parse(localStorage.getItem('email') || "[]")
  //   const user = {
  //     email: email,
  //     password: password
  //   }
  //   users.push(user);
  //   localStorage.setItem('users', JSON.stringify(users));
  //   console.log(localStorage.getItem('users'));
  // }

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
                  type="email"  name="email" 
                  className= {`form-control ${errors.email && 'validationCustom03'}`} 
                  autoComplete="off"
                  id="floatingInput"
                  onChange={handleChange} value={values.email} required
                ></input>
                <label for="floatingInput">Email address</label>
                {errors.password && (
                  <p className="text-danger">{errors.email}</p>
                )}
              </div>

             
              <div class="form-floating mb-4" style={{ color: "#000" }}>
                <input
                  type="password" name="password" 
                  className= {`form-control ${errors.password && 'validationCustom03'}`} 
                  id="floatingPassword"

                  onChange={handleChange} value={values.password} required
                ></input>
                <label for="floatingPassword">Password</label>
                {errors.password && (
                  <p className="text-danger">{errors.password}</p>
                )}
              </div>


             


            </div>

            <button type="button" className="btn btn-light mb-4" onClick={handleSubmit} noValidate>
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
