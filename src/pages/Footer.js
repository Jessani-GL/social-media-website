
import "../App.css";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";

function Footer() {
  return (
    <div className="App">
      {/* ///////////////// FOOTER SECTION ///////////////// */}
      <footer className="sticky-bottom">
        <div className="text-bg-dark p-3">
          <p>
            <a className="navbar-brand text-danger fw-bold" href="#">
              LAN
            </a>{" "}
            Copyright &copy; 2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
