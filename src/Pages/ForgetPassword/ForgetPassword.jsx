import React, { useState } from 'react';
import './ForgetPassword.css';
import { NavLink } from 'react-router-dom';


function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    // Call the reset password API
    const isSuccess = await resetPassword(email);

    setIsLoading(false);

    if (isSuccess) {
      // Handle success (maybe show a message or redirect)
      alert('Password reset link sent to your email!');
    } else {
      // Show error message
      setErrorMessage('Failed to send password reset link. Please try again.');
    }
  };

  return (
    <>
      <div className="forgetPasswordSection shadow mb-5 mt-5 bg-body">
        <img src="loginImg.jpg" className="bg-body" />

        <form className="forgetPasswordForm" onSubmit={handleResetPassword}>
          <h1 className="authTitle mb-5">Forget Password</h1>

          <p className="infoPara mb-2">
            Please enter your <span className="emailWord">email</span> to verify
            your password...
          </p>

          <div className="m-auto">
            <div className="col">
              <input
                type="email"
                className="form-control email mb-4 shadow-1"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Set email state
                required
              />
            </div>

            {errorMessage && (
              <p className="error-message">{errorMessage}</p> // Display error
            )}

            <button type="submit" className="submitBtn pt-1 pb-1" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Code'}
            </button>

            <div className="col d-flex flex-column align-items-start mt-5">
              <NavLink className="arrowIcon" to="/Login">
                <img src="arrowIcon.svg" className="w-100" />
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ForgetPassword;
const resetPassword = async (email) => {
  const proxyUrl = `https://cnem.online/BE/api/Account/forget-password`;

  const headers = {
    "Content-Type": "application/json",
    Accept: "*/*",
    "X-Api-Key": "e7bba24d-32ed-42bb-833c-30c4eec9088d",
  };

  const body = JSON.stringify({ email });

  try {
    const response = await fetch(proxyUrl, {
      method: "POST",
      headers: headers,
      body: body,
    });

    const responseBody = await response.json(); // Parse response body

    if (response.status === 200) {
      if (
        responseBody.message === "Password reset successful" ||
        responseBody.message ===
          "Password reset link has been sent to your email" ||
        responseBody.message === "User registered successfully"
      ) {
        window.location.href = "/SendCodeForForgetPassword";
        return true;
      }
    } else if (response.status === 401) {
      window.location.href = "/Home";
      return false;
    } else if (response.status === 400) {
      if (
        responseBody.message ===
        "The email address could not be found. Please ensure you have entered the correct email address."
      ) {
        return false;
      }
    }
    return false;
  } catch (error) {
    return false;
  }
};
