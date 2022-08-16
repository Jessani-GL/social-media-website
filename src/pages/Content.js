import card1 from "../img/get-started.jpg"; // Photo by Kelly Sikkema: https://unsplash.com/photos/DUiRgwrHKXI
import card2 from "../img/connect.jpg"; // Photo by Volodymr Hryshchenko: https://unsplash.com/photos/V5vqWC9gyEU
import card3 from "../img/share.jpg"; // Photo by Brett Jordan.:https://unsplash.com/photos/Obyan1bxya8
import "../App.css";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";

function Content() {
  return (
    <div className="App">

      {/* ///////////////// MAIN SECTION 1 ///////////////// */}
      <div class="main-box space-between">
        {/* CONTAINER */}
        <div className="container-xl fs-5 ">
          <div class="row">
            {" "}
            {/* ROW */}
            <div class="col">{/* START OF COL */}
              <div class="card" style={{ color: "#000" }} id='moveup'>
                <img src={card1} class="card-img-top" alt="banner" />

                <div class="card-body">
                  <h2 class="card-title">Get Started &#9745;</h2>
                  Sign up and create your account today to start
                  communicating with work and education with LAN!
                  
                </div>
              </div>

            </div> {/* END OF COL */}

            <div class="col"> {/* START OF COL */}
              <div class="card" style={{ color: "#000" }} id='moveup'>
                <img src={card2} class="card-img-top" alt="banner" />

                <div class="card-body">
                  <h2 class="card-title">Connect with friends</h2>
                  Connect with friends and colleagues! Customise and follow
                  people that you choose.
                </div>
              </div>
            </div> {/* END OF COL */}

            <div class="col">{/* START OF COL */}
            <div class="card" style={{ color: "#000" }} id='moveup'>
                <img src={card3} class="card-img-top" alt="banner" />

                <div class="card-body">
                  <h2 class="card-title">Share and Post!</h2>
                  Post and share messages and more with your friends!
                  Be part of a enganging community.
                </div>
              </div>
            </div>{" "}
            {/* END OF COL */}
          </div>

          {/* END OF ROW */}
        </div>{" "}
        {/* END OF CONTAINER */}
        {/* CONTAINER */}
      </div>

      {/* ///////////////// MAIN SECTION 2 ///////////////// */}
      <div class="main-box">
        <div class="container-xl fs-5 ">
          <p class="fs-2 fw-bold">COMMUNICATE WITH YOUR COLLEAGUES AND FRIENDS</p>
          <div class="row">
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
                  <text class="text-muted">We will not share your email</text>
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
      </div>{" "}
      {/* end of MAIN */}

      {/* ///////////////// MAIN SECTION 3 (get rid of later potentially) ///////////////// */}

{/* Nothing here yet */}
    </div>
  );
}

export default Content;
