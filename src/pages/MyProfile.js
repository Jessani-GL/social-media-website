import "../App.css";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import {
  getUserProperties,
} from "../data/repository";
import { useState } from "react";

function MyProfile(props) {
  const userDetails = getUserProperties(props.username);
  

  return (
    <div className="App">
      <div className="main-box-large">
        <div className="main-box custom-card">
          <h1>MyProfile</h1>

          <p>Username stuff: {props.username}</p>
          <p>First Name: {userDetails.fName}</p>
          <p>Last Name: {userDetails.lName}</p>
          <p>Email: {userDetails.email}</p>
        </div>
      </div>{" "}
      {/* end of main-box custom-card */}
      {/* Nothing here yet */}
    </div>
  );
}

export default MyProfile;
