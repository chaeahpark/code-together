import { useTag } from "../../contexts/TagContext";
import uuid from "react-uuid";

const Sidebar = () => {
  const { options } = useTag();

  const renderTags = options.map((option) => {
    return (
      <p className="tag__item" key={uuid()}>
        #{option}
      </p>
    );
  });

  return (
    <>
      <div className="main__sidebar">
        <div className="sidebar__tags">
          <h3 className="main__title title--tag">Tags</h3>
          {renderTags}
        </div>
        <div className="sidebar__languages"></div>
      </div>
    </>
  );
};

export default Sidebar;
