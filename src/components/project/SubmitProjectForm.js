import { useRef } from "react";

function SubmitProjectForm(props) {
  const inputNameRef = useRef();
  const inputUrl = useRef();
  const inputDescription = useRef();
  const inputQuestion = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const projectName = inputNameRef.current.value;
    const projectUrl = inputUrl.current.value;
    const projectDescription = inputDescription.current.value;
    const projectQuestion = inputQuestion.current.value;

    const projectData = {
      name: projectName,
      url: projectUrl,
      description: projectDescription,
      questions: projectQuestion
    };

    props.onSubmitProject(projectData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="">
        <label htmlFor="project-name">Project Name</label>
        <input type="text" required id="project-name" ref={inputNameRef} />
      </div>
      <div className="">
        <label htmlFor="website-link">Website Link</label>
        <input type="url" required id="website-link" ref={inputUrl} />
      </div>
      <div className="">
        <label htmlFor="project-description">Project Description</label>
        <textarea
          id="project-description"
          required
          rows="5"
          ref={inputDescription}
        ></textarea>
      </div>
      <div className="">
        <label htmlFor="project-questions">Questions for others?</label>
        <textarea
          id="project-questions"
          required
          rows="5"
          ref={inputQuestion}
        ></textarea>
      </div>
      <div className="">
        <button>Add Meetup</button>
      </div>
    </form>
  );
}

export default SubmitProjectForm;
