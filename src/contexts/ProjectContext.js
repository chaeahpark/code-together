import { createContext, useReducer, useContext } from "react";
import { initialState, projectReducer } from "../reducers/projectReducer";
import { GET_PROJECT } from "../reducers/types";

const ProjectContext = createContext(initialState);

const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const getProject = () => {
    dispatch({ type: GET_PROJECT });
  };

  const value = {
    projects: state.projects,
    getProject: getProject,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const projects = useContext(ProjectContext);

  return projects;
};

export default ProjectProvider;
