import React from "react";
import "./SendCode.css";
import { NavLink } from "react-router-dom";

function SendCode() {
  return (
    <>
    
      <div className="sendCodeSection shadow mb-5 mt-5 bg-body ">
        <img src="loginImg.jpg" className="bg-body" />

        <form className="sendCodeForm ">
          <h1 className="authTitle mb-5">Verify Your Email</h1>

          <p className="infoPara mb-2 ">
            please enter your <span className="emailWord">email</span> to verify
            & continue...
          </p>
          <div className="m-auto">
            <div className="col">
              <input
                type="email"
                className="form-control email mb-4 shadow-1"
                name="email"
                placeholder="email"
              />
            </div>
            {/* <div className="col d-flex flex-column align-items-end">
            <NavLink className="resetPasswordBtn" to="/ForgetPassword"> Reset Password</NavLink>
          </div> */}

            <button type="submit" className="submitBtn pt-1 pb-1">
             Continue
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

export default SendCode;
