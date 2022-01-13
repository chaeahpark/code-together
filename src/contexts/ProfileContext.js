import { createContext, useReducer, useContext } from "react";
import { profileReducer, initialState } from "../reducers/profileReducer";
import { SWITCH_TOGGLE } from "../reducers/types";

const ProfileContext = createContext(initialState);

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const changeToggle = (status) => {
    dispatch({ type: SWITCH_TOGGLE, payload: status });
  };

  const value = {
    toggle: state.profileToggle,
    changeToggle,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const profile = useContext(ProfileContext);

  return profile;
};

export default ProfileProvider;
