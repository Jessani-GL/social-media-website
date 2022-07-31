// import logo from "./logo.svg";
import banner from "./banner.png";
import "./App.css";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">


      {/* NAV BAR */}
      <nav class="navbar sticky-top navbar-dark bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand text-danger fw-bold fs-4" href="#">LAN</a>
          <form class="d-flex">
          <button type="button" class="btn btn-dark">Sign up</button>
          <button type="button" class="btn btn-dark">Sign in</button>
          </form>
        </div>
      </nav>
      {/* END OF NAV BAR */}
      <div class='container-fluid'>
      <img src={banner} class="img-fluid" alt="banner"/>
</div>
      <div class='main'>
 {/* CONTAINER */}
 <div className="container-xxl ">
        
        <div class="row fs-3">
          
          {/* row */}
          <div class="col">
            {/* FORM */}
            <form>
              <group>
                <label>Email address</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="email@email.com"
                ></input>
                <text className="text-muted">
                  We will not share your email
                </text>
              </group>
            </form>
          </div>{" "}
          {/*end of col */}
          <div class="col">
            <form>
              <group>
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="password123"
                ></input>
              </group>
            </form>
          </div>
          {/*end of col */}
        </div>{" "}
        {/*end of row */}
        <button type="button" class="btn btn-secondary">
          Login
        </button>
        {/* CONTAINER */}
        <div class="container">
          <p>hello this is a container</p>
        </div>
        {/* CARD */}
        <div class="card" style={{ color: "#000" }}>
          <div class="card-body">This is some text within a card body.</div>
        </div>
      </div>{" "}
      {/* end of CONTAINER */}
    
      </div> {/* end of MAIN */}
       <footer class='sticky-bottom'>
       <div class="text-bg-dark p-3">
        <p><a class="navbar-brand text-danger fw-bold" href="#">LAN</a> Copyright &copy; 2022</p></div>
       </footer>
    </div>
  );
}

export default App;
