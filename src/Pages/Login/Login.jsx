import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    // Call the login function
    const response = await loginUser(email, password,false);

    setIsLoading(false);

    // Handle the response
    if (response.status === "success") {
      // Redirect or perform action upon successful login
      window.location.href = "/Home"; // Redirect to Home page
    } else {
      // Display error message based on the response
      setErrorMessage(response.message || "Login failed. Please try again.");
    }
  };

  return (
    <>
      <div className="registerSection mb-5 mt-5 bg-body shadow">
        <img src="/loginImg.jpg" className="bg-body registrationImg" />

        <form className="registerForm" onSubmit={handleLogin}>
          <h1 className="authTitle mb-5">Login</h1>

          <div className="ms-auto">
            <div className="d-flex flex-column mb-4">
              <div className="col">
                <input
                  type="email"
                  className="form-control email shadow-1"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="d-flex flex-column mb-4">
              <div className="col input-boxPass1 d-flex align-items-center justify-content-center">
                <input
                  className="form-control password shadow-1"
                  name="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  className="eyeIcon1 border border-0 bg-white"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <img src="/hideEyeIcon.svg" />
                  ) : (
                    <img src="/eyeIcon.svg" />
                  )}
                </button>
              </div>
            </div>

           

            {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}

            <div className="col d-flex justify-content-between align-items-end mb-5">
              <NavLink className="haveAccount me-1" to="/Register">
                Register?
              </NavLink>
              <NavLink className="haveAccount me-1" to="/ForgetPassword">
                Forget your password?
              </NavLink>
            </div>

            <div className="col d-flex flex-column align-items-end">
              <button
                type="submit"
                className="submitBtn pt-1 pb-1"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;

// Function to log in the user
const loginUser = async (email, password, rememberMe) => {
  const proxyUrl = `https://cnem.online/BE/api/Account/login`;

  const headers = {
    "Content-Type": "application/json",
    Accept: "*/*",
    "X-Api-Key": "e7bba24d-32ed-42bb-833c-30c4eec9088d",
  };

  const body = JSON.stringify({
    email: email,
    password: password,
    rememberMe: rememberMe,
  });

  try {
    const response = await fetch(proxyUrl, {
      method: "POST",
      headers: headers,
      body: body,
    });

    if (response.status === 200) {
      const responseData = await response.json();
      window.location.href = "/Home";
      return {
        status: "success",
        message: responseData.message,
        userId: responseData.userId,
        confirmEmail: responseData.confirmEmail,
        confirmPhone: responseData.confirmPhone,
        phoneNumber: responseData.phoneNumber,
        token: responseData.token,
      };
    } else if (response.status === 400) {
      const responseData = await response.json();

      if (responseData.confirmPhone === false) {
        return {
          status: "Phone not confirmed",
          message: responseData.message,
        };
      } else if (responseData.message === "Invalid password.") {
        return {
          status: "invalid-password",
          message: responseData.message,
        };
      } else if (responseData.message === "Invalid login attempt.") {
        return {
          status: "email-not-exist",
          message: responseData.message,
        };
      } else if (response.status === 401) {
        window.location.href = "/Home";
      } else {
        return {
          status: "email-not-confirmed",
          message: responseData.message,
          confirmEmail: responseData.confirmEmail,
        };
      }
    } else {
      return { status: "login-failed" };
    }
  } catch (error) {
    return { status: "error", message: "Network error. Please try again." };
  }
};
