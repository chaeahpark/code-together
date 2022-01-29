import {
  GET_CURRENT_USER,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  SWITCH_LOADING_STATUS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SET_USERID,
  SET_PROFILE_IMAGE_URL,
  SET_USER_NAME,
} from "./types";

export const authInitialState = {
  user: null,
  loginError: "",
  signupError: "",
  loading: true,
  profileImageUrl: "",
  name: "",
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
    case SET_PROFILE_IMAGE_URL:
      return { ...state, profileImageUrl: payload };
    case SET_USER_NAME:
      return { ...state, name: payload };
    default:
      return state;
  }
};
