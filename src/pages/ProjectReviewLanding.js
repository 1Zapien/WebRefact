import { useParams } from "react-router-dom";

function ProjectReviewLanding() {
  const params = useParams();

  return (
    <section>
      <h1>Project Review Page</h1>
      <p>{params.projectId}</p>
    </section>
  );
}

export default ProjectReviewLanding;
