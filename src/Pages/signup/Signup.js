import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Signup = () => {
  const {
    user,
    signUp,
    signUpFail,
    signupErrorMsg,
    signUpSuccess,
    setLoading,
    loading,
  } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //validation
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return signUpFail("Passwords do not match.");
    }

    try {
      signUpFail("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);

      navigate("/", { replace: true });
    } catch (e) {
      signUpFail("Failed to create an account.");
    }

    setLoading(false);
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
        {signupErrorMsg && (
          <p className="form-alert alert__error">{signupErrorMsg}</p>
        )}
        <form className="form form-signup" onSubmit={handleSubmit}>
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
          <button
            disabled={loading}
            className="form-btn"
            type="submit"
            value="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};

export default Signup;
