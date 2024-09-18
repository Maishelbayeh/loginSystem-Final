import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <>
     <div className="registerSection mb-5 mt-5 bg-body shadow">
        <img src="/loginImg.jpg" className="bg-body registrationImg" />

        <form className="registerForm ">
          {/* <img src="/YounisCoLogo.png" className="logo"/> */}

          <h1 className="authTitle mb-5">Login</h1>

          {/* <p>welcome {userName}</p> */}
          <div className="ms-auto">
            <div className="d-flex flex-column mb-4">
              <div className="col">
                <input
                  type="email"
                  className="form-control email shadow-1 "
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="d-flex flex-column mb-4">
              <div className="col input-boxPass1 d-flex align-items-center justify-content-center">
                <input
                  className="form-control password shadow-1"
                  name="password"
                  placeholder="password"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  className="eyeIcon1 border border-0 bg-white"
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
            <div className="col d-flex justify-content-between align-items-end mb-5">

            <NavLink className="haveAccount me-1" to="/Register">
                Register?
              </NavLink>
              <NavLink className="haveAccount me-1" to="/ForgetPassword">
                Forget your password?
              </NavLink>
           </div>
                       <div className="col d-flex flex-column align-items-end">

              <button type="submit" className="submitBtn pt-1 pb-1">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
