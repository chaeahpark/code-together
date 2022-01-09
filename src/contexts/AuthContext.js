import React, { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer, authInitialState } from "../reducers/authReducer";
import { auth } from "../api/authApi";
import { GET_CURRENT_USER } from "../reducers/types";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    // check the user status when tha app is loaded
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch({ type: GET_CURRENT_USER, payload: user });
    });

    console.log("state auth provider", state);
    return unsubscribe;
  }, []);

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const value = {
    user: state.user,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
