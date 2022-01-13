import { SWITCH_TOGGLE } from "./types";

const initialState = {
  profileToggle: false,
};

const profileReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SWITCH_TOGGLE:
      return { ...state, profileToggle: payload };

    default:
      return state;
  }
};

export { initialState, profileReducer };
