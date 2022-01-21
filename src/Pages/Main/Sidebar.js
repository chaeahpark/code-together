import { useTag } from "../../contexts/TagContext";
import { useProjects } from "../../contexts/ProjectContext";

import uuid from "react-uuid";

import { query, where, getDocs } from "firebase/firestore";
import { postsCollection } from "../../api/postApi";

const Sidebar = () => {
  const { options } = useTag();
  const { getProjects } = useProjects();

  const tagQuery = (option) => {
    return query(postsCollection, where("tags", "array-contains", option));
  };

  const handleOnTagClick = async (option) => {
    const filteredProjects = [];
    const dataSnapshot = await getDocs(tagQuery(option));
    dataSnapshot.forEach((doc) => filteredProjects.push(doc.data()));

    getProjects(filteredProjects);
  };

  const renderTags = options.map((option) => {
    return (
      <li
        className="tag__item"
        key={uuid()}
        onClick={() => {
          handleOnTagClick(option);
        }}
      >
        #{option}
      </li>
    );
  });

  return (
    <>
      <div className="main__sidebar">
        <div className="sidebar__tags">
          <h3 className="main__title title--tag">Tags</h3>
          <ul>{renderTags}</ul>
        </div>
        <div className="sidebar__languages"></div>
      </div>
    </>
  );
};

export default Sidebar;
