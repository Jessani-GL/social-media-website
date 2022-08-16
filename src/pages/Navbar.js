import "../App.css";
import React from "react";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (

    
    <div className="App">
      {/* NAV BAR */}
      <nav class="navbar sticky-top navbar-dark bg-dark backdrop-shadow">
        
        <div class="container-fluid">
        <Link className="navbar-brand text-danger fw-bold fs-4" to="/" id='btn-up'>LAN</Link>
          
          <form class="d-flex">
            <Link type="button" class="btn btn-dark" to='/signup' id='btn-up'>Sign up</Link>
            <Link type="button" class="btn btn-dark" to='/signin' id='btn-up'>Sign in</Link>
          </form>
        </div>
         
      </nav>
      {/* END OF NAV BAR */}

     
    </div>
  );
}

export default Navbar;
