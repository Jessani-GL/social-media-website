import "../App.css";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";
import { getUserProperties, removeUser, removeSpecificUser, changeUserDetails, getUsers} from "../data/repository";
import Popup from "../components/Popup";
import validate from "../components/changeUserDetailsValidation";
import useForm from "../components/useForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function MyProfile(props) {

  const navigate = useNavigate();

  // Retrieves date of when the user created their account in order to print onto the profile page. 
  const userJoinedDate = getUserProperties(props.username, getUsers());
  // This useState was created so that the system can update the user details when the user changes their details when editing a profile.
  let [userDetails, setUserDetais] = useState(getUserProperties(props.username, getUsers()));
  // This useState is used to create active changes on the website when user changes their profile information.
  const [userInfo, setUserInfo] = useState({fName: userDetails.fName, lName:  userDetails.lName,  email: userDetails.email});
  // A boolean useState to determine whether or not the popup for profile edit is shown based the user clicking on the corresponding button
  const [editPopup, setEditPopup] = useState(false);
  // A boolean useState to determine whether or not the popup for delete profile is shown based the user clicking on the corresponding button
  // A popup for delete account is made for confirmation if the user wants to delete their profile or not. 
  // Because it would be inconvenient if the user accidentally deletes their account if there was no confirmation. 
  const [deletePopup, setDeletePopup] = useState(false);

  // Custom hook to validate the form. 
  const { values, errors, handleChange, handleSubmit } = useForm(
    changeUserInfo,
    validate
  );

  // Deletes users account and navigates them back to the home page.
  function handleDeleteUser() {
    navigate("/");
    removeUser();
    props.logoutUser();
    
  }

  // This changes the user information when user has inputed their changed values.
  function changeUserInfo() {

    const newUserDetails = changeUserDetails(
      values.firstName,
      values.lastName,
      values.email,
      values.password
    );

    // Confirms changes
    setUserDetais(newUserDetails);
    setUserInfo({...userInfo, fName: values.firstName, lName: values.lastName, email: values.email})
 
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
            className="btn btn-dark button-pos"
            onClick={() => setDeletePopup(true)}
          >
            Delete
          </button>
          <p>
            {userInfo.fName} {userInfo.lName}
          </p>
          <p className="text-secondary">{userInfo.email}</p>

          <hr />
          {/* /////////// POP UP FOR EDIT PROFILE  /////////// */}
          <p>Joined date: {userJoinedDate.joinedDate}</p>
        </div>

      

        <Popup trigger={editPopup} setTrigger={setEditPopup}>
          <h1 className="text-danger">Edit Profile</h1>
          <hr />
          <h5>Change Name</h5>
          <div className="row">
            <div className="col mb-4">
              <input
                type="text"
                name="firstName"
                
                placeholder="First name"
                aria-label="First name"
                required
                className={`form-control ${
                  errors.firstName && "validationCustom03"
                }`}
                id="floatingPassword"
                // onChange={e => setUserInfo({...userInfo, fName: e.target.value})}
                onChange={handleChange}
                value={values.firstName}
              ></input>
              {errors.firstName && (
                <p className="text-danger">{errors.firstName}</p>
              )}
            </div>
            <div className="col">
              <input
                type="text"
                name="lastName"
                
                placeholder="Last name"
                required
                aria-label="Last name"
                className={`form-control ${
                  errors.lastName && "validationCustom03"
                }`}
                id="floatingPassword"
                // onChange={(e) => (setUserInfo({...userInfo, lName: e.target.value}))}
                onChange={handleChange}
                value={values.lastName}
              ></input>
              {errors.lastName && (
                <p className="text-danger">{errors.lastName}</p>
              )}
            </div>
          </div>

          <h5>Change Email</h5>
          <div className="row">
            <div className="col mb-4">
              <input
                type="text"
                name="email"
                
                placeholder="Email"
                required
                aria-label="Email"
                className={`form-control ${
                  errors.email && "validationCustom03"
                }`}
                id="floatingPassword"
                // onChange={e => setUserInfo({...userInfo, email: e.target.value})}
                onChange={handleChange}
                value={values.email}
              ></input>
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>
          </div>

         
          {/* {errors.all && <p className="text-danger">{errors.all}</p>} */}
          <button
            type="button"
            className="btn btn-dark btn-right"
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

          <button type="button" className="btn btn-danger btn-right" onClick={() => {setDeletePopup(false); handleDeleteUser()}}>
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
