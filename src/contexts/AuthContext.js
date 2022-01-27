import React, { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer, authInitialState } from "../reducers/authReducer";
import { auth } from "../api/authApi";
import {
  GET_CURRENT_USER,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  SWITCH_LOADING_STATUS,
  UPDATE_PROFILE_IMAGE,
  LOGIN_FAIL,
} from "../reducers/types";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    // check the user status when tha app is loaded
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch({ type: GET_CURRENT_USER, payload: user });

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const signUpFail = (message) => {
    dispatch({ type: SIGNUP_FAIL, payload: message });
  };

  const signUpSuccess = (user) => {
    dispatch({ type: SIGNUP_SUCCESS, payload: user });
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const setLoginError = (type, message) => {
    dispatch({ type, payload: message });
  };

  const setLoading = (status) => {
    dispatch({
      type: SWITCH_LOADING_STATUS,
      payload: status,
    });
  };

  const updateProfileImage = (image) => {
    dispatch({ type: UPDATE_PROFILE_IMAGE, payload: image });
  };

  const value = {
    user: state.user,
    loading: state.loading,
    signupErrorMsg: state.signupError,
    signUp,
    signUpFail,
    signUpSuccess,
    setLoading,
    login,
    logout,
    loginError: state.loginError,
    setLoginError,
    profileImageFile: state.profileImageFile,
    updateProfileImage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
