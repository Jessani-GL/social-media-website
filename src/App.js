import "./App.css";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { getUser, removeUser } from "./data/repository";
// pages
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Signup from "./pages/Signup.js";
import Signin from "./pages/Signin.js";
import MyProfile from "./pages/MyProfile.js";
import Forum from "./pages/Forum.js";
import Home from "./pages/Home.js";

function App() {
  const [username, setUsername] = useState(getUser());

  const loginUser = (username) => {
    setUsername(username);
  };

  const logoutUser = () => {
    setUsername(null);
  };

  console.log(`username:  ${username}`);

  return (
    <div className="">
      <Router>
        <Navbar username={username} logoutUser={logoutUser} />
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route
            path="/signup"
            element={<Signup loginUser={loginUser} username={username} />}
          />
          <Route
            path="/signin"
            element={<Signin loginUser={loginUser} username={username} />}
          />
          <Route
            path="/myprofile"
            element={<MyProfile username={username} />}
          />
          <Route path="/forum" element={<Forum username={username} />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
