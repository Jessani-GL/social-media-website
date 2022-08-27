// Will need to add validation

import "../App.css";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";
import { verifyUser } from "../data/repository";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

function Signin(props) {
  // const [fields, setFields] = useState({email:'', password:''})
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const navigate = useNavigate();
  
  // const handleFieldsChange = (event) => {
  //   event.persist();
  //   const emailInput = event.target.name;
  //   const passwordInput = event.target.name;
    
  //   const values = {username: fields.email,  password: fields.password};

  //   values[emailInput] = passwordInput;
  //   setFields(values);
  // }

  const printValues = e => {
    
    console.log(emailField, passwordField);
  };

  function handleLogin () {
    console.log('fields')
    // console.log(emailField, passwordField);
    printValues();
    
    
    const isVerified = verifyUser(emailField, passwordField)
    console.log(`The key: ${props.username} The value: ${emailField}`);
    if (isVerified === true) {
      props.loginUser(emailField);
      navigate('/myprofile');
      console.log('login using fields');
      
      return;
    } else{
      return console.log('wrong input');
      navigate('/myprofile');
      
    }
  }

  return (
    <div className="">
      {/* ///////////////// MAIN SECTION ///////////////// */}
      <div className="main-box-large">
        <div className="container-xl fs-6 ">
          <br></br>
          <div className="main-box custom-card">
            <p className="fs-3 fw-bold mb-5">Sign in</p>
            {/* FORM */}

            <div className="container-sm fs-6">
              <div class="form-floating mb-4 " style={{ color: "#000" }}>
                <input
                  type="email"
                  value={emailField}
                  onChange={e => setEmailField(e.target.value)}
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                ></input>
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-4" style={{ color: "#000" }}>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  
                  value={passwordField}
                  onChange={e => setPasswordField(e.target.value)}
                  required
                ></input>
                <label for="floatingPassword">Password</label>
              </div>
            </div>

            <button type="button" className="btn btn-light mb-4" onClick={handleLogin}>
              Login
            </button>
            <text className="text-muted fs-6">Don't have an account? </text>
          </div>{" "}
        </div>

        {/* end of CONTAINER */}
      </div>{" "}
      {/* end of MAIN */}
    </div>
  );
}

export default Signin;
