import React from "react";

const Signup = () => {
  return (
    <div className="form-page">
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
        <form className="form form-signup">
          <div className="input-container">
            <label htmlFor="email" className="input-label">
              Email:
            </label>
            <input type="text" placeholder="ex) abc@gmail.com" />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="input-label">
              Password:
            </label>
            <input type="text" placeholder="" />
          </div>
          <div className="input-container">
            <label htmlFor="passwordConfirmation" className="input-label">
              Password Confirmation:
            </label>
            <input type="text" placeholder="" />
          </div>
          <button className="form-btn" type="submit" value="submit">
            Sign Up
          </button>
        </form>
      </div>
      {/* ADD A LINK ON LOGIN */}
      <p>Already have an account? Login</p>
    </div>
  );
};

export default Signup;
