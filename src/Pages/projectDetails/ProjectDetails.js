import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  let { postId } = useParams();
  return <div>ProjectDetails {postId}</div>;
};

export default ProjectDetails;
