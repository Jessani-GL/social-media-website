import "../App.css";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";

import useForm from "../components/useForm";
import validate from "../components/SignupValidation";
import Popup from "../components/Popup";
import { useNavigate } from "react-router-dom";
import { addUsers } from "../data/repository";
import { useState } from "react";

// Signup page
function Signup(props) {
  const navigate = useNavigate();
  // This used state is used for the sucessful popup cue. If 'true' the pop up will show.
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Custom hook to validate the signup form.
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  // The 'login' function executes if the user sucessfully logs in without errors.
  function login() {
    // Creates the date of when the user created their acccount.
    const today = Date.now();
    const dateCreated = new Intl.DateTimeFormat(
      "en-US",
      { timeZone: "Australia/Sydney" },
      { year: "numeric", day: "2-digit", month: "2-digit" }
    ).format(today);

    // Save their details into localStorage.
    addUsers(
      values.firstName,
      values.lastName,
      values.email,
      values.password,
      dateCreated
    );

    // Globally saving the user email (unique)
    props.loginUser(values.email);

    // Popup message for visual cue for successful login
    setLoggedIn(true);
  }

  // Navigates to profile page. This function is seperate because the user is supposed to continue to the profile page after seeing the successful visual cue.
  // When the user clicks 'Continue', after acknowledging that they successfully made an account, they will go to the profile page then.
  function continuetoProfile() {
    navigate("/myprofile");
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

              <div className="form-floating mb-4" style={{ color: "#000" }}>
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
              onClick={() => {
                handleSubmit();
              }}
              noValidate
            >
              Submit
            </button>
          </div>{" "}
          {/* Pop up */}
          <Popup trigger={isLoggedIn} setTrigger={setLoggedIn}>
            <h1 className="text-success">You have successfully loggedin</h1>
            <hr />
            <h5>To continue, click 'continue'.</h5>

            <button
              type="button"
              className="btn btn-light btn-right"
              onClick={() => {
                setLoggedIn(false);
                continuetoProfile();
              }}
            >
              Continue
            </button>
          </Popup>
        </div>

        {/* end of CONTAINER */}
      </div>{" "}
      {/* end of MAIN */}
    </div>
  );
}

export default Signup;
