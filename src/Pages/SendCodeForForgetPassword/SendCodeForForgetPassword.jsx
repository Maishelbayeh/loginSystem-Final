import React from "react";
import "./SendCodeForForgetPassword.css";
import { NavLink } from "react-router-dom";

function SendCodeForForgetPassword() {
  return (
    <>
    
      <div className="sendCodeForForgetPasswordSection shadow mb-5 mt-5 bg-body ">
        <img src="loginImg.jpg" className="bg-body" />

        <form className="sendCodeForForgetPasswordForm ">
          <h1 className="authTitle mb-5">Check Your Email</h1>

          <p className="infoPara mb-2 ">
           Enter The <span className="emailWord">Code</span> We Have Sent to Your
            Email Address...
          </p>
          <div className="m-auto">
          <div className="col">
              <input
                type="text"
                className="form-control code mb-4 shadow-1"
                //value={user.code}
                name="code"
                placeholder="code"
                // onChange={handleInput}
              />
            </div>
            {/* <div className="col d-flex flex-column align-items-end">
            <NavLink className="resetPasswordBtn" to="/ForgetPassword"> Reset Password</NavLink>
          </div> */}

            <button type="submit" className="submitBtn pt-1 pb-1">
              Verify & Continue
            </button>

            <div className="col d-flex flex-column align-items-start mt-5">
              <NavLink className="arrowIcon" to="/Login">
              <img src="arrowIcon.svg" className="w-100"/>
              </NavLink>
              </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SendCodeForForgetPassword;
