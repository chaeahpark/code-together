import React, { useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";

const Signup = () => {
  const { signUp } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //validation
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return;
    }

    try {
      // 1. before sign up, sign up error should be an empty string.
      // 2. dispatch and change the loading state to true
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch {
      // dispatch action type SIGN_UP_FAIL
    }

    // set loading state to FALSE
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
        <form className="form form-signup">
          <div className="input-container">
            <label htmlFor="email" className="input-label">
              Email:
            </label>
            <input type="text" placeholder="ex) abc@gmail.com" ref={emailRef} />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="input-label">
              Password:
            </label>
            <input type="text" placeholder="" ref={passwordRef} />
          </div>
          <div className="input-container">
            <label htmlFor="passwordConfirmation" className="input-label">
              Password Confirmation:
            </label>
            <input type="text" placeholder="" ref={passwordConfirmRef} />
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
