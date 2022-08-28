// data is set and stored here

// import values from '../components/useForm';
import { useState } from "react";

const USERS_KEY = "users1";
const USER_KEY = "user";

// const [loggedIn, setLogggedin] = useState('');

// ======================  USER DATA ======================
function addUsers(
  inputFName,
  inputLName,
  inputEmail,
  inputPassword,
  joinedDate
) {
  
  // Stops if data is already registered / in the data.
  // if (localStorage.getItem("users") !== null) return;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = {
    fName: inputFName,
    lName: inputLName,
    email: inputEmail,
    password: inputPassword,
    joinedDate: joinedDate,
  };
  users.push(user);
  // localStorage.setItem(USER_KEY, JSON.stringify(user));
  localStorage.setItem("users", JSON.stringify(users));
  // console.log(localStorage.getItem("users"));
}

// original
// returns an object
function getUserProperties(email, data) {
  let userData = {};

  
  for (const user of data) {
    if (user.email === email) {
      userData = {
        fName: user.fName,
        lName: user.lName,
        email: user.email,
        password: user.password,
        joinedDate: user.joinedDate,
      };
    }
  }
  
  return userData;
}

// function getUserProperties(email) {
//   let userData = {};

//   const data = getUsers();

//   function getData() {
//     if (data.email === email) {
//       userData = {
//         fName: data.fName,
//         lName: data.lName,
//         email: data.email,
//         password: data.password,
//         joinedDate: data.joinedDate,
//       };
//     }
//   }

//   getData();
  
//   return userData;
//   // return data
// }

// function getUserProperties(email) {
//   let userData = {};

//   const data = getUsers();


//   for (const user of Object.entries(data)) {
//     if (user.email === email) {
//       userData = {
//         fName: user.fName,
//         lName: user.lName,
//         email: user.email,
//         password: user.password,
//         joinedDate: user.joinedDate,
//       };
//     }
//   }
//   return userData;
//   // return data
// }


// do i need this since i already parsed it when i first initalised users...
// function getUsers() {
//   const data = localStorage.getItem("users");

//   return JSON.parse(data);
// }

function getUsers() {
  const data = localStorage.getItem("users");
  return JSON.parse(data)
  // try {
  //    || {};
  // } catch (error) {
  //   return {}
  // }
  
}

// for the login
function verifyUser(username, password) {
  const users = getUsers();
  
  for (const loggedUser of users) {
    
    if (username === loggedUser.email && password === loggedUser.password ) {
      setUser(username);
      return true;
    } 
    return false;
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

// function removeSpecificUser(email) {
//   const users = getUsers();
//   const user = users.filter(user => user.email === email) 
//   localStorage.removeItem(user);
// }

// ======================  CHANGING USER INFORMATION ======================
// function changeUserDetails(email, newFName, newLName, newEmail, newPassword) {
//   let replacedData = {};

//   let previousData = getUsers();

//   // If any of the fields were changed and submitted, it will be changed
//   for (let user in previousData) {
//     if (user.email === email) {
//       let replacedFName = newFName !== undefined ? newFName : user.fName;
//       let replacedLName = newLName !== undefined ? newLName : user.lName;
//       let replacedEmail = newEmail !== undefined ? newEmail : user.email;
//       let replacedPassword =
//         newPassword !== undefined ? newPassword : user.password;

//       replacedData = {
//         fName: replacedFName,
//         lName: replacedLName,
//         email: replacedEmail,
//         password: replacedPassword,
//         joinedDate: user.joinedDate,
//       };

//       // Confirms changes
//        // Confirms changes
//       // removeUser();
//       // setUser(replacedEmail);
      
//       // addUsers(replacedFName, replacedLName, replacedEmail, user.joinedDate)
      
//       localStorage.setItem("users", JSON.stringify(replacedData));
//     }
//   }
//   let data = localStorage.getItem("users");
//   let updatedDate= JSON.parse(data) 
//   return updatedDate;
// }

// function changeUserDetails1(email, newFName, newLName, newEmail, newPassword) {
//   let replacedData = {};

//   const beforeUser = getUsers();

//   const replacedFName = newFName !== null ? newFName : beforeUser.fName;
//   const replacedLName = newLName !== null ? newLName : beforeUser.lName;
//   const replacedEmail = newEmail !== null ? newEmail : beforeUser.email;
//   const replacedPassword =
//     newPassword !== null ? newPassword : beforeUser.password;
//   // If any of the fields were changed and submitted, it will be changed
//   beforeUser.fName = newFName;
//  beforeUser.lName = newLName;
//  beforeUser.email = newEmail;
//  beforeUser.password = newPassword;

// }

// function acquireNewUserInfo(newFName, newLName, newEmail, newPassword) {
//   const beforeData = getUsers();

//   const replacedFName = newFName !== null ? newFName : beforeData.fName;
//   const replacedLName = newLName !== null ? newLName : beforeData.lName;
//   const replacedEmail = newEmail !== null ? newEmail : beforeData.email;
//   const replacedPassword =
//     newPassword !== null ? newPassword : beforeData.password;

//   const changedUserInfo = {
//     fName: replacedFName,
//     lName: replacedLName,
//     email: replacedEmail,
//     password: replacedPassword,
//     joinedDate: beforeData.joinedDate,
//   };

//   return changedUserInfo;
// }

// function setChangedUserDetails(email) {
//   let replacedData = {};

//   const previousData = changeUserDetails();

//   for (const user of previousData) {
//     if (user.email === email) {
//       replacedData = {
//         fName: user.replacedFName,
//         lName: user.replacedLName,
//         email: user.replacedEmail,
//         password: user.replacedPassword,
//         joinedDate: user.joinedDate,
//       };

//       // Confirms changes
//       localStorage.setItem("users", JSON.stringify(replacedData));
//     }
//   }
// }

// ======================  USER POSTS DATA ======================

// function changeUserDetails(newFName, newLName, newEmail, newPassword) {
//   const data = getUsers();
//   for (const user of data)

//   const replacedFName = newFName !== null ? newFName : user.fName;
//       const replacedLName = newLName !== null ? newLName : user.lName;
//       const replacedEmail = newEmail !== null ? newEmail : user.email;
//       const replacedPassword = newPassword !== null ? newPassword : user.password;
// }

function changeUserDetails(prevuousUser, newEmail, newFName, newLastName) {
  let appenedUsers = []

  const users = getUsers();
 
  const user = users.find(user => user.email === newEmail) 

  const saved = users;
  // removeUser()
  // const previousUser = localStorage.getItem("users");
  // users.shift();
  // users.slice(3)

  
  if (!user) {
    ;
    users.push([{fName: newFName, lName: newLastName, email: newEmail}])
  } else {
    if (newFName) user.fName = newFName;
    if (newLastName) user.lName = newLastName;
    if (newEmail) user.email = newEmail;
    
  }

  setUser(newEmail)

  localStorage.setItem('users', JSON.stringify(users))

  return users;
}

function addPost(caption) {
  // if user did not add a image, set image to default (how to do that here?)
  const posts = JSON.parse(localStorage.getItem("userPosts") || "[]");
  const post = {
    caption: caption
  };

  posts.push(post);
  // localStorage.setItem(USER_KEY, JSON.stringify(user));
  localStorage.setItem("userPosts", JSON.stringify(posts));
}

export {
  getUserProperties,
  addUsers,
  getUsers,
  verifyUser,
  getUser,
  removeUser,
  // removeSpecificUser,
  changeUserDetails,
  addPost,
  // acquireNewUserInfo,
  // setChangedUserDetails,
};
