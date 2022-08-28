// Will need to add validation

import "../App.css";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";
import { verifyUser, getUserProperties, addUsers } from "../data/repository";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

function Signin(props) {
  
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const navigate = useNavigate();

  // Executes when user logs in. 
  function handleLogin () {
    
    // Checks if user data and input is the same.
    const isVerified = verifyUser(emailField, passwordField)
    
    if (isVerified === true) {
      const input =  JSON.stringify(emailField)
      props.loginUser(input);

      const previousData = getUserProperties(input);

       addUsers(
        previousData.fName,
        previousData.lName,
        previousData.email,
        previousData.password,
        previousData.joinedDate
    );
      navigate('/myprofile');
   
      return;
    } 
    else{
      return console.log('wrong input');

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
              <div className="form-floating mb-4 " style={{ color: "#000" }}>
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
