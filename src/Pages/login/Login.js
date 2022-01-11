import { useRef, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import { LOGIN_FAIL, LOGIN_SUCCESS } from "../../reducers/types";

const Login = () => {
  const { user, login, setLoginError, loginError, setLoading, loading } =
    useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoginError(LOGIN_SUCCESS, "");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/", { replace: true });
    } catch {
      setLoginError(LOGIN_FAIL, "Failed to login.");
    }

    setLoading(false);
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h2 className="form-title">Log In</h2>
        {loginError ? (
          <p className="form-alert alert__error">{loginError}</p>
        ) : (
          ""
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
          <button
            disabled={loading}
            className="form-btn"
            type="submit"
            value="submit"
          >
            Log In
          </button>
        </form>
      </div>
      <p>
        Need an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
