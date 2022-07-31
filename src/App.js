// import logo from "./logo.svg";
import "./App.css";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">

      {/* NAV BAR */}
      <nav class="navbar sticky-top navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">Navbar</a>
          <form class="d-flex">
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      {/* END OF NAV BAR */}

      <header className="App-header">
        {/* CONTAINER */}
        <div className="container-xxl">
          {/* BUTTON */}
          <button type="button" className="btn btn-primary">
            Wow!
          </button>
          <div class="row">
            {" "}
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
      </header>
    </div>
  );
}

export default App;
