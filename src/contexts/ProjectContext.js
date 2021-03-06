import { createContext, useReducer, useContext } from "react";
import { initialState, projectReducer } from "../reducers/projectReducer";
import {
  GET_PROJECT,
  SET_TITLE,
  SET_CONTENT,
  SET_TAGS,
  SET_USERID,
  SET_POSTID,
  SET_CURRENT_PROJECT,
  SET_SEARCHING_PROJECTS,
} from "../reducers/types";
import { useAuth } from "./AuthContext";

const ProjectContext = createContext(initialState);

const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);
  const { user } = useAuth();

  // TODO: change the naming "getProject -> setProjects"
  const getProjects = (projects) => {
    dispatch({ type: GET_PROJECT, payload: projects });
  };

  const setTitle = (title) => {
    dispatch({ type: SET_TITLE, payload: title });
  };

  const setContent = (content) => {
    dispatch({ type: SET_CONTENT, payload: content });
  };

  const setTags = (tags) => {
    dispatch({ type: SET_TAGS, payload: tags });
  };

  const setPostId = (postId) => {
    dispatch({ type: SET_POSTID, payload: postId });
  };

  const setCurrentProject = (project) => {
    dispatch({ type: SET_CURRENT_PROJECT, payload: project });
  };

  const setSearchingProjects = (searchTerm) => {
    const searchingProject = state.projectList.filter((project) =>
      project.content.includes(searchTerm)
    );
    dispatch({ type: SET_SEARCHING_PROJECTS, payload: searchingProject });
  };

  const value = {
    projectList: state.projectList,
    postTitle: state.currentProject.title,
    postContent: state.currentProject.content,
    postTags: state.currentProject.tags,
    postWriter: state.currentProject.userId,
    postSaved: state.currentProject.saved,
    postId: state.currentProject.postId,
    currentProject: state.currentProject,
    searchingProjects: state.searchingProjects,

    getProjects,
    setTitle,
    setContent,
    setTags,
    setPostId,
    setCurrentProject,
    setSearchingProjects,
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
