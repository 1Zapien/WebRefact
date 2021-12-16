import SubmitProjectForm from "../components/project/SubmitProjectForm";
import { useNavigate } from "react-router-dom";

function SubmitNewProject() {
  const navigate = useNavigate();
  function SubmitProjectHandler(projectData) {
    fetch("https://webrefact-fc61e-default-rtdb.firebaseio.com/projects.json", {
      method: "POST",
      body: JSON.stringify(projectData),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <h1>Submit your project</h1>
      <SubmitProjectForm
        onSubmitProject={SubmitProjectHandler}
      ></SubmitProjectForm>
    </section>
  );
}

export default SubmitNewProject;
