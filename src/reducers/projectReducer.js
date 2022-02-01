import {
  ADD_PROJECT,
  UPDATE_PROJECT,
  REMOVE_PROJECT,
  GET_PROJECT,
  SET_TITLE,
  SET_CONTENT,
  SET_TAGS,
  SET_USERID,
  SET_CREATEDAT,
  SET_POSTID,
  SET_CURRENT_PROJECT,
  SET_HEART,
  SET_SAVE,
} from "./types";

const initialState = {
  projectList: [],
  currentProject: {
    title: "",
    content: null,
    tags: [],
    userId: "",
    postId: "",
    save: [],
    heart: ["123fds", "fres21"],
    createdAt: null, // how to set a timestamp?
  },
};

const projectReducer = (state, action) => {
  const { projectList, currentProject } = state;
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECT:
      return { ...state, projectList: payload };
    case ADD_PROJECT:
      return { ...state, projectList: projectList.push(payload) };
    case SET_TITLE:
      return {
        ...state,
        currentProject: { ...currentProject, title: payload },
      };
    case SET_CONTENT:
      return {
        ...state,
        currentProject: { ...currentProject, content: payload },
      };
    case SET_TAGS:
      return {
        ...state,
        currentProject: { ...currentProject, tags: payload },
      };
    case SET_USERID:
      return {
        ...state,
        currentProject: { ...currentProject, userId: payload },
      };
    case SET_CREATEDAT:
      return {
        ...state,
        currentProject: { ...currentProject, createdAt: payload },
      };

    case SET_POSTID:
      return {
        ...state,
        currentProject: { ...currentProject, postId: payload },
      };

    case SET_CURRENT_PROJECT:
      return { ...state, currentProject: payload };

    case SET_HEART:
      return {
        ...state,
        currentProject: {
          ...currentProject,
          heart: payload,
        },
      };

    case SET_SAVE:
      return {
        ...state,
        currentProject: {
          ...currentProject,
          save: [...currentProject.save, payload],
        },
      };

    default:
      return state;
  }
};

export { initialState, projectReducer };
