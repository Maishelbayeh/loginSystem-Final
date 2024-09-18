import React from "react";
import "./ResetPassword.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility1 = (e) => {
    e.preventDefault();
    setShowPassword1(!showPassword1);
  };
  


  return (
    <>
      <div className="resetPasswordSection mb-5 mt-5 bg-body shadow">
        <img src="/loginImg.jpg" className="bg-body" />

        <form
          className="resetPasswordForm  mb-5 "
          //onSubmit={handleForm}
        >
          <h1 className="authTitle mb-5">Reset Password</h1>
          <p className="infoPara mb-2 ">
           enter a <span className="emailWord">new Password </span>for your account...</p>
          <div className="m-auto">
        

            <div className="d-flex flex-column mb-4">
              <div className="col input-boxPass2 d-flex align-items-center justify-content-center">
                <input
                  className="form-control password shadow-1"
                  name="password"
                  placeholder="new password"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  className="eyeIcon2 border border-0 bg-white"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <img src="/eyeIcon.svg" />
                  ) : (
                                        <img src="/hideEyeIcon.svg" />

                  )}
                </button>
              </div>
            </div>

            <div className="d-flex flex-column mb-4">
              <div className="col input-boxPass2 d-flex align-items-center justify-content-center">
                <input
                  className="form-control password shadow-1"
                  name="confirmPassword"
                  placeholder="confirm new password"
                  type={showPassword1 ? "text" : "password"}
                />
                <button
                  className="eyeIcon2 border border-0 bg-white"
                  onClick={togglePasswordVisibility1}
                >
                  {showPassword1 ? (
                    <img src="/eyeIcon.svg" />
                  ) : (
                                        <img src="/hideEyeIcon.svg" />

                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="submitBtn pt-1 pb-1">
              Reset Password
            </button>

          </div>
          <div className="col d-flex flex-column align-items-start justify-content-end mt-5">
              <NavLink className="arrowIcon" to="/SendCode">
              <img src="arrowIcon.svg" className="w-100"/>
              </NavLink>
              </div>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;
