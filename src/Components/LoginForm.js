import React from "react";
import './Login.css';

export default function LoginForm() {
  return (
    <>  
        <div style={{ height: "75px" }}></div>
      <div className="pt-5">  
  <div className="global-container">  
    <div className="card login-form">  
    <div className="card-body">  
    <strong><h1 className="card-title text-center my-4 ">Title</h1></strong>
        <h5 className="card-title text-center">Login to start your journey</h5>
        <div className="card-text">  
            <form>  
                <div className="form-group my-3">  
                    <label htmlFor="exampleInputEmail1"> Enter Email address </label>  
                    <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"/>  
                </div>  
                <div className="form-group my-4" >  
                    <label htmlFor="exampleInputPassword1">Enter Password </label>  
                    <a href="/" style={{float:"right",fontSize:"12px"}}> Forgot password? </a>  
                    <input type="password" className="form-control form-control-sm" id="exampleInputPassword1"/>  
                </div>
                <div className="buttonsign">  
                <button type="submit" id="signIn" className="btn btn-primary btn-block text-center"> Sign in </button>
                </div>
                <div className="sign-up">  
                    Don't have an account? <a href="#"> Create One </a>  
                </div>  
            </form>  
        </div>  
    </div>  
</div>  
</div>
</div>
    </>
  );
}
