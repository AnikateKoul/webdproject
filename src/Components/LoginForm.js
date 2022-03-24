import React from "react";
import { Link } from "react-router-dom";
import './Login.css';


export default function LoginForm() {
  return (
    <>  
        <div style={{ height: "75px" }}></div>
        <section>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-light text-dark" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 text-center" style={{background: "rgb(240,240,240)", borderRadius: "15px"}}>

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Title</h2>
              <p className="text-dark-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                <label className="form-label" for="typeEmailX">Email</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                <label className="form-label" for="typePasswordX">Password</label>
              </div>
              <button className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" id="loginbtn" type="submit">Login</button>
            </div>

            <div>
              <p className="mb-0">Don't have an account? <Link to="/signup" className="text-dark-50 fw-bold">Sign Up</Link></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
