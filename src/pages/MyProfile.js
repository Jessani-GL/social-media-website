import "../App.css";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";
import { getUserProperties, removeUser, removeSpecificUser} from "../data/repository";
import Popup from "../components/Popup";
import validate from "../components/changeUserDetailsValidation";
import useForm from "../components/useForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function MyProfile(props) {
  const navigate = useNavigate();
  // use useEffect for this userDetails to reload the component with the new information
  // Or or And I could make a method for and have 'onChange'
  const userDetails = getUserProperties(props.username);
  console.log(`USERNAME: ${props.username}`)
  const [editPopup, setEditPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);

  const { values, errors, handleChange, handleSubmit } = useForm(
    changeUserInfo,
    validate
  );

  // Deletes users account
  function handleDeleteUser() {
    navigate("/");
    removeUser();
    props.logoutUser();
    
  }

  function changeUserInfo() {
    console.log("change user click");
    console.log(`changed name: ${values.fName}`);
    console.log(`changed name: ${values.email}`);
    console.log(`changed name: ${values.lName}`);
    console.log(`changed name: ${values.password}`);

    // const newUserInfo = changeUserDetails(
    //   values.firstName,
    //   values.lastName,
    //   values.email,
    //   values.password
    // );

    // console.log(newUserInfo);
    // let newuserDetails = getUserProperties(props.username);
    // console.log(newuserDetails);
  }

  return (
    <div className="App">
      <div className="main-box-large-dark">
        <div className="profile-card">
          <h1 className="text-danger">Profile</h1>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setEditPopup(true)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setDeletePopup(true)}
          >
            Delete
          </button>
          <p>
            {userDetails.fName} {userDetails.lName}
          </p>
          <p className="text-secondary">{userDetails.email}</p>

          <hr />
          {/* /////////// POP UP FOR EDIT PROFILE  /////////// */}
          <p>Joined date: {userDetails.joinedDate}</p>
        </div>
        <Popup trigger={editPopup} setTrigger={setEditPopup}>
          <h1 className="text-danger">Edit Profile</h1>
          <hr />
          <h5>Change Name</h5>
          <div class="row">
            <div class="col mb-4">
              <input
                type="text"
                name="firstName"
                class="form-control"
                placeholder="First name"
                aria-label="First name"
                // required
                className={`form-control ${
                  errors.firstName && "validationCustom03"
                }`}
                id="floatingPassword"
                onChange={handleChange}
                value={values.firstName}
              ></input>
              {errors.firstName && (
                <p className="text-danger">{errors.firstName}</p>
              )}
            </div>
            <div class="col">
              <input
                type="text"
                name="lastName"
                class="form-control"
                placeholder="Last name"
                aria-label="Last name"
                className={`form-control ${
                  errors.lastName && "validationCustom03"
                }`}
                id="floatingPassword"
                onChange={handleChange}
                value={values.lastName}
              ></input>
              {errors.lastName && (
                <p className="text-danger">{errors.lastName}</p>
              )}
            </div>
          </div>

          <h5>Change Email</h5>
          <div class="row">
            <div class="col mb-4">
              <input
                type="text"
                name="email"
                class="form-control"
                placeholder="Email"
                // required
                aria-label="Email"
                className={`form-control ${
                  errors.email && "validationCustom03"
                }`}
                id="floatingPassword"
                onChange={handleChange}
                value={values.email}
              ></input>
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>
          </div>

          <h5>Change Password</h5>
          <div class="row">
            <div class="col mb-4">
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="Password"
                aria-label="Password"
                className={`form-control ${
                  errors.password && "validationCustom03"
                }`}
                id="floatingPassword"
                onChange={handleChange}
                value={values.password}
              ></input>
              {errors.password && (
                <p className="text-danger">{errors.password}</p>
              )}
            </div>
            <div class="col mb-4">
              <input
                type="text"
                class="form-control"
                placeholder="Re-enter password"
                aria-label="Re-enter passowrd"
              ></input>
            </div>
          </div>
          {/* {errors.all && <p className="text-danger">{errors.all}</p>} */}
          <button
            type="button"
            class="btn btn-dark btn-right"
            onClick={handleSubmit}
            noValidate
          >
            Save Changes
          </button>
        </Popup>

        {/* /////////// POP UP FOR EDIT PROFILE  /////////// */}
        <Popup trigger={deletePopup} setTrigger={setDeletePopup}>
          <h1 className="text-danger">Delete Account</h1>
          <hr />
          <h5>Confirm to delete your account.</h5>

          <button type="button" class="btn btn-danger btn-right" onClick={() => {setDeletePopup(false); handleDeleteUser()}}>
            Delete
          </button>
        </Popup>
      </div>{" "}
      {/* end of main-box custom-card */}
      {/* Nothing here yet */}
    </div>
  );
}

export default MyProfile;
