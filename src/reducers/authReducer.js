import { GET_CURRENT_USER } from "./types";

export const authInitialState = {
  user: null,
  loginError: "",
  signupError: "",
  loading: false,
};

export const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CURRENT_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};
