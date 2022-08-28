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
      <div className="main-box space-between">
        {/* CONTAINER */}
        <div className="container-xl fs-5 ">
          <div className="row">
            {" "}
            {/* ROW */}
            <div className="col">{/* START OF COL */}
              <div className="card" style={{ color: "#000" }} id='moveup'>
                <img src={card1} class="card-img-top" alt="banner" />

                <div className="card-body">
                  <h2 className="card-title">Get Started &#9745;</h2>
                  Sign up and create your account today to start
                  communicating with work and education with LAN!
                  
                </div>
              </div>

            </div> {/* END OF COL */}

            <div className="col"> {/* START OF COL */}
              <div className="card" style={{ color: "#000" }} id='moveup'>
                <img src={card2} className="card-img-top" alt="banner" />

                <div className="card-body">
                  <h2 className="card-title">Connect with friends</h2>
                  Connect with friends and colleagues! Customise and follow
                  people that you choose.
                </div>
              </div>
            </div> {/* END OF COL */}

            <div className="col">{/* START OF COL */}
            <div className="card" style={{ color: "#000" }} id='moveup'>
                <img src={card3} className="card-img-top" alt="banner" />

                <div className="card-body">
                  <h2 className="card-title">Share and Post!</h2>
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

      {/* end of MAIN */}

      {/* ///////////////// MAIN SECTION 3 (get rid of later potentially) ///////////////// */}

{/* Nothing here yet */}
    </div>
  );
}

export default Content;
