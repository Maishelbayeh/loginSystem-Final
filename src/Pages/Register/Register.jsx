import React from "react";
import { NavLink } from "react-router-dom";
import "./Register.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Register() {
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
      <div className="registerSection mb-5 mt-5 bg-body shadow">
        <img src="/loginImg.jpg" className="bg-body registrationImg" />

        <form className="registerForm ">
          {/* <img src="/YounisCoLogo.png" className="logo"/> */}

          <h1 className="authTitle mb-5">Signup</h1>

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
              <div className="col">
                <input
                  type="number"
                  className="form-control phone shadow-1"
                  name="phoneNumber"
                  placeholder="phone number"
                />
              </div>
            </div>
            <div className="d-flex flex-column mb-4">
              <div className="col input-boxPass d-flex align-items-center justify-content-center">
                <input
                  className="form-control password shadow-1"
                  name="password"
                  placeholder="password"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  className="eyeIcon border border-0 bg-white"
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
              <div className="col input-boxPass d-flex align-items-center justify-content-center">
                <input
                  className="form-control password shadow-1"
                  name="confirmPassword"
                  placeholder="confirm password"
                  type={showPassword1 ? "text" : "password"}
                />
                <button
                  className="eyeIcon border border-0 bg-white"
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

            <div className="col d-flex flex-column align-items-end">
              <NavLink className="haveAccount me-1" to="/Login">
                Already hava an account?
              </NavLink>
              <button type="submit" className="submitBtn pt-1 pb-1">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
