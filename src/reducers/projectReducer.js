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
} from "./types";

// const initialState = {
//   projects: [
//     {
//       postId: 1,
//       createdAt: "01 Jan 2022",
//       writerUid: "id",
//       writerEmail: "abc@gmail.com",
//       tags: ["javscript", "react"],
//       title:
//         "We are looking for front-end and back-end and designers to build an awesome project",
//       content:
//         "Are you interested in the projenct? Please leave comments below.",
//       comments: [
//         { userUid: "id", timestamp: "05 Jan 2022", comment: "I want to join!" },
//         { userUid: "id", timestamp: "07 Jan 2022", comment: "Cool project!" },
//       ],
//       saved: 3,
//     },
//     {
//       postId: 2,
//       createdAt: "0 Dec 2021",
//       writerUid: "id",
//       writerEmail: "abc@gmail.com",
//       tags: ["javscript", "nodejs", "react", "vue"],
//       title: "We are building a library. Do you want to join?",
//       content:
//         "We are looking for two backend developers. Please leave comments below.",
//       comments: [
//         { userUid: "id", timestamp: "05 Jan 2022", comment: "I want to join!" },
//         { userUid: "id", timestamp: "07 Jan 2022", comment: "Cool project!" },
//       ],
//       saved: 3,
//     },
//     {
//       postId: 3,
//       createdAt: "0 Dec 2021",
//       writerUid: "id",
//       writerEmail: "abc@gmail.com",
//       tags: ["javscript", "react", "vue"],
//       title: "We are building a library. Do you want to join?",
//       content:
//         "We are looking for two backend developers. Please leave comments below.",
//       comments: [
//         { userUid: "id", timestamp: "05 Jan 2022", comment: "I want to join!" },
//         { userUid: "id", timestamp: "07 Jan 2022", comment: "Cool project!" },
//       ],
//       saved: 5,
//     },
//   ],
// };

const initialState = {
  projectList: [],
  currentProject: {
    title: "",
    content: null,
    tags: [],
    userId: "",
    saved: 0,
    createdAt: null, // how to set a timestamp?
  },
};

const projectReducer = (state, action) => {
  const { projectList, currentProject } = state;
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECT:
      return { ...state };
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
    default:
      return state;
  }
};

export { initialState, projectReducer };
