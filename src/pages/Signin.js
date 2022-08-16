import "../App.css";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";

function Signin() {
  return (
    <div className="">
      {/* ///////////////// MAIN SECTION ///////////////// */}
      <div class="main-box-large">
        <div class="container-xl fs-6 ">
          <br></br>
          <div class="main-box custom-card">
          <p class="fs-3 fw-bold mb-5">Sign in</p>
            {/* FORM */}

<div class='container-sm fs-6'>
<div class="form-floating mb-4 " style={{ color: "#000" }}>
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating mb-4" style={{ color: "#000" }}>
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
  <label for="floatingPassword">Password</label>
</div>
</div>
         
            <button type="button" class="btn btn-light mb-4">
              Login
            </button>
            <text class="text-muted fs-6">Don't have an account? </text>
          </div>{" "}
        </div>

        {/* end of CONTAINER */}
      </div>{" "}
      {/* end of MAIN */}
    </div>
  );
}

export default Signin;
