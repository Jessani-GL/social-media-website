// data is set and stored here

// import values from '../components/useForm';
import { useState } from "react";

const USERS_KEY = "users1";
const USER_KEY = "user";

// const [loggedIn, setLogggedin] = useState('');

// ======================  USER DATA ====================== 
function addUsers(inputFName, inputLName, inputEmail, inputPassword) {
  console.log(inputEmail, inputPassword);
  // Stops if data is already registered / in the data.
  // if (localStorage.getItem("users") !== null) return;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = {
    fName: inputFName,
    lName: inputLName,
    email: inputEmail,
    password: inputPassword,
  };

  users.push(user);
  // localStorage.setItem(USER_KEY, JSON.stringify(user));
  localStorage.setItem("users", JSON.stringify(users));
  console.log(localStorage.getItem("users"));
}

function getUserProperties(email) {
  let userData = {};

  const data = getUsers();

  for (const user of data) {
    if (user.email === email) {
      userData = {
        fName: user.fName,
        lName: user.lName,
        email: user.email,
        password: user.password,
      };
    }
  }
  return userData;
  // return data
}

// do i need this since i already parsed it when i first initalised users...
function getUsers() {
  const data = localStorage.getItem("users");

  return JSON.parse(data);
}

// for the login
function verifyUser(username, password) {
  const users = getUsers();

  for (const user of users) {
    if (user.email === username && user.password === password) {
      setUser(username);
      return true;
    }
  }
}

function setUser(username) {
  localStorage.setItem("users", username);
}

function getUser() {
  return localStorage.getItem("users");
}

function removeUser() {
  localStorage.removeItem("users");
}

// ======================  USER POSTS DATA ====================== 

function addPost() {

}

export {
  getUserProperties,
  addUsers,
  getUsers,
  verifyUser,
  getUser,
  removeUser,
};
