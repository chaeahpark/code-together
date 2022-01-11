import {
  GET_CURRENT_USER,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  SWITCH_LOADING_STATUS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from "./types";

export const authInitialState = {
  user: null,
  loginError: "",
  signupError: "",
  loading: true,
};

export const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CURRENT_USER:
      return { ...state, user: payload };
    case SIGNUP_FAIL:
      return { ...state, signupError: payload };
    case SIGNUP_SUCCESS:
      return { ...state, user: payload };
    case SWITCH_LOADING_STATUS:
      return { ...state, loading: payload };
    case LOGIN_SUCCESS:
      return { ...state, loginError: payload };
    case LOGIN_FAIL:
      return { ...state, loginError: payload };
    default:
      return state;
  }
};
