import { useParams } from "react-router-dom";
import IndividualProject from "../components/project/IndividualProject";
import { useState, useEffect } from "react";
import PageWithComments from "../components/comments/PageWithComments";

function ProjectReviewLanding() {
  const [loadedProjects, setLoadedProjects] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const { projectId } = params;
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://webrefact-fc61e-default-rtdb.firebaseio.com/projects/${projectId}.json`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        const project = [];
        const dataProject = {
          id: projectId,
          ...data
        };
        project.push(dataProject);
        setLoadedProjects(project);
        setIsLoading(false);
      });
  }, [projectId]);

  if (isLoading) {
    return (
      <section>
        <p>Loading Projects</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Project Review Page</h1>
      <IndividualProject
        // style={ .project li { width:90% }}
        eachProject={loadedProjects}
      />
      <PageWithComments></PageWithComments>
    </section>
  );
}

export default ProjectReviewLanding;
