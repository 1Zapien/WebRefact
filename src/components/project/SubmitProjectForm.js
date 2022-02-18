import { useRef } from "react";
import classes from "./SubmitProjectForm.module.css";

function SubmitProjectForm(props) {
  const inputNameRef = useRef();
  const inputUrl = useRef();
  const inputSourceUrl = useRef();
  const inputDescription = useRef();
  const inputQuestion = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const projectName = inputNameRef.current.value;
    const projectUrl = inputUrl.current.value;
    const projectSourceUrl = inputSourceUrl.current.value;
    const projectDescription = inputDescription.current.value;
    const projectQuestion = inputQuestion.current.value;

    const projectData = {
      name: projectName,
      url: projectUrl,
      sourceUrl: projectSourceUrl,
      description: projectDescription,
      questions: projectQuestion
    };

    props.onSubmitProject(projectData);
  }

  return (
    <div className={classes.form__card}>
      <form onSubmit={submitHandler} className={classes.form_content}>
        <h1>Submit your personal project</h1>
        <div className={classes.form__section}>
          <label htmlFor="project-name">Project Name</label>
          <input
            type="text"
            required
            id="project-name"
            ref={inputNameRef}
            placeholder="Enter project name"
          />
        </div>
        <div className={classes.form__section}>
          <label htmlFor="website-link">Website Link</label>
          <input
            type="url"
            required
            id="website-link"
            ref={inputUrl}
            placeholder="Enter project Url"
          />
        </div>
        <div className={classes.form__section}>
          <label htmlFor="source-link">GitHub Link</label>
          <input
            type="url"
            required
            id="source-link"
            ref={inputSourceUrl}
            placeholder="GitHub Url"
          />
        </div>
        <div className={classes.form__section}>
          <label htmlFor="project-description">Project Description</label>
          <textarea
            id="project-description"
            required
            rows="5"
            ref={inputDescription}
            placeholder="Enter a short description of you project"
          ></textarea>
        </div>
        {/* <div className={classes.form__section}>
          <label htmlFor="project-questions">Questions for others?</label>
          <textarea
            id="project-questions"
            required
            rows="5"
            ref={inputQuestion}
          ></textarea>
        </div> */}
        <div className={classes.form__submit}>
          <button className={classes.project__submit}>Add Project</button>
        </div>
      </form>
    </div>
  );
}

export default SubmitProjectForm;
