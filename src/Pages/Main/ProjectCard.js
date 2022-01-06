import React, {useEffect} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faComments } from "@fortawesome/free-solid-svg-icons";

const projectData = [
  {
    timestamp: "01 Jan 2022",
    userid: "id",
    langs: ["javscript", "react"],
    title:
      "We are looking for front-end and back-end and designers to build an awesome project",
    content: "Are you interested in the projenct? Please leave comments below.",
    comments: [
      { userId: "id", timestamp: "05 Jan 2022", comment: "I want to join!" },
      { userId: "id", timestamp: "07 Jan 2022", comment: "Cool project!" },
    ],
    saved: 3,
  },
  {
    timestamp: "20 Dec 2021",
    userid: "id",
    langs: ["javscript", "nodejs", "react", "vue"],
    title: "We are building a library. Do you want to join?",
    content:
      "We are looking for two backend developers. Please leave comments below.",
    comments: [
      {
        userId: "id",
        timestamp: "21 Dec 2022",
        comment: "Are you still looking for members?",
      },
      { userId: "id", timestamp: "22 Dec 2021", comment: "Yes! We are!" },
    ],
    saved: 2,
  },
  {
    timestamp: "15 Dec 2021",
    userid: "id",
    langs: ["python", "java"],
    title: "We are buildinga a project for portfolio!",
    content:
      "I am a self-taught developer. I am looking for people who are in the same joureny and create an awesome projects.",
    comments: [
      { userId: "id", timestamp: "15 Dec 2022", comment: "Can I join?" },
      {
        userId: "id",
        timestamp: "17 Dec 2021",
        comment: "What is your email?",
      },
    ],
    saved: 5,
  },
];

const ProjectCard = () => {
const renderCards = projectData.map((project)=>{
  return (
    <div className="group__card">
      <div className="group__langs">
        <img
          className="group__lang"
          src={require("../../Assets/images/javascript.png")}
          alt="javascript"
        />
        <img
          className="group__lang"
          src={require("../../Assets/images/react.png")}
          alt="react"
        />
      </div>
      <p className="group__title">
        {project.title}
      </p>
      <div className="group__icons">
        <div className="group__icons--comments">
          <FontAwesomeIcon icon={faComments} />
          <p className="comment__total">{project.comments.length}</p>
        </div>
        <div className="group__icons--saved">
          <FontAwesomeIcon icon={faBookmark} />
          <p className="comment__saved--total">{project.saved}</p>
        </div>
      </div>
    </div>
  )
})

  return (
    <>
      {renderCards}
    </>
  );
};

export default ProjectCard;
