// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import {getUser, removeUser} from "./data/repository"
// pages
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Signup from "./pages/Signup.js";
import Signin from "./pages/Signin.js";
import MyProfile from "./pages/MyProfile.js";
import Forum from "./pages/Forum.js";
import Home from "./pages/Home.js";
// Boostrap styling


function App() {
  // console.log(window.location);
  const [username, setUsername] = useState(getUser());

  const loginUser = (username) => {
    setUsername(username);
    
  }

  // potential bug. removes the user from the data completely. so cannot log back in
  const logoutUser = () => {
    removeUser();
    setUsername(null);
  }

  console.log('username:');
  
  return (
    <div className="">
      <Router>
        <Navbar username = {username} logoutUser={logoutUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup loginUser={loginUser} />} />
          <Route path="/signin" element={<Signin loginUser={loginUser} />} />
          <Route path="/myprofile" element={<MyProfile username={username}/>} />
          <Route path="/forum" element={<Forum username={username}/>} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
