import banner from "../img/banner.png"; // Photo by Martin Garrido: https://unsplash.com/photos/cVUPic1cbd4
import "../App.css";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";

function Header() {
  return (
    <div className="App">

      {/* ///////////////// HEADER SECTION ///////////////// */}
      <header>
        {/* BANNER */}
        <div className="container-fluid">
        <div className="overhead-header">
          {/* Logo */}
        <p className="fs-1 fw-bold text-danger">LAN</p>
        <h5>Loop Agile Now</h5>
        The new innovative social media website for industries. 
          </div>
          <img src={banner} className="img-fluid" alt="banner" />
          
        </div>
      </header>

    </div>
  );
}

export default Header;
