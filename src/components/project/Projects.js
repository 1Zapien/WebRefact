import { useState, useEffect } from "react";
import IndividualProject from "./IndividualProject";
import classes from "./Projects.module.css";

function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProjects, setLoadedProjects] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://webrefact-fc61e-default-rtdb.firebaseio.com/projects.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        const projects = [];
        for (const key in data) {
          const project = {
            id: key,
            ...data[key]
          };
          projects.push(project);
        }
        projects.reverse();
        setLoadedProjects(projects);
        setIsLoading(false);
        console.log(projects);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading Projects</p>
      </section>
    );
  }

  return (
    <div className={classes.main}>
      <h1>All Projects</h1>
      <IndividualProject eachProject={loadedProjects} />
    </div>
  );
}

export default Projects;
