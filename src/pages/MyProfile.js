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


  const [isLoggedIn, setLoggedIn] = useState(false);

  
  const navigate = useNavigate();
  // use useEffect for this userDetails to reload the component with the new information
  // Or or And I could make a method for and have 'onChange'
  const userJoinedDate = getUserProperties(props.username, getUsers());
  let [userDetails, setUserDetais] = useState(getUserProperties(props.username, getUsers()));
  
  
  const [userInfo, setUserInfo] = useState({fName: userDetails.fName, lName:  userDetails.lName,  email: userDetails.email});
  
  // console.log(userInfo);

  // console.log(`USERNAME: ${props.username}`)
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
    console.log(`changed email: ${values.email}`);
    console.log(`changed lastname: ${values.lName}`);
    console.log(`changed password: ${values.password}`);

    
    const newUserDetails = changeUserDetails(
      values.firstName,
      values.lastName,
      values.email,
      values.password
    );

    // const newUsername = newUserDetails.email;
    // props.username={newUsername}

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
          <div class="row">
            <div class="col mb-4">
              <input
                type="text"
                name="firstName"
                class="form-control"
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
            <div class="col">
              <input
                type="text"
                name="lastName"
                class="form-control"
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
          <div class="row">
            <div class="col mb-4">
              <input
                type="text"
                name="email"
                class="form-control"
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
