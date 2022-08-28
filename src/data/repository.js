// Data is set and stored here

// ======================  USER DATA ======================
// Saves user inforamtion from the sign up to localStorage. 
function addUsers(
  inputFName,
  inputLName,
  inputEmail,
  inputPassword,
  joinedDate
) {
  
  // Stops if data is already registered / in the data.
  // if (localStorage.getItem("users") !== null) return;

  // Saves data  into a array of objects.
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = {
    fName: inputFName,
    lName: inputLName,
    email: inputEmail,
    password: inputPassword,
    joinedDate: joinedDate,
  };
  users.push(user);
  
  localStorage.setItem("users", JSON.stringify(users));
  
}


// Returns an object. Retrieves the users data for gloabl use to print elsewhere.
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

// Gets user data.
function getUsers() {
  const data = localStorage.getItem("users");
  return JSON.parse(data)
  // try {
  //    || {};
  // } catch (error) {
  //   return {}
  // }
  
}

// Verifies user for login.
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

// Sets username
function setUser(username) {
  localStorage.setItem("users", username);
}

// Retrives user.
function getUser() {
  return localStorage.getItem("users");
}

// Deletes user. 
function removeUser() {
  localStorage.removeItem("users");
}


// ======================  CHANGING USER INFORMATION ======================

// Changes user information when a user edits their profile.
function changeUserDetails(newEmail, newFName, newLastName) {

  const users = getUsers();
 
  const user = users.find(user => user.email === newEmail) 

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

// Saves a users post to localStorage.
function addPost(caption) {
  // if user did not add a image, set image to default (how to do that here?)
  const posts = JSON.parse(localStorage.getItem("userPosts") || "[]");
  const post = {
    caption: caption
  };

  posts.push(post);
  localStorage.setItem("userPosts", JSON.stringify(posts));
}

// Enable use of functions outside of this file.
export {
  getUserProperties,
  addUsers,
  getUsers,
  verifyUser,
  getUser,
  removeUser,
  changeUserDetails,
  addPost,
};
