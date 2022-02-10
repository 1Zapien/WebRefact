import { useState, useEffect } from "react";
import IndividualProject from "./IndividualProject";
import classes from "./Projects.module.css";

function Projects() {
  const [postsPerPage, setpostsPerPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProjects, setLoadedProjects] = useState([]);
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);

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
        setpostsPerPage(4);
      });
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(0, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  const loopWithSlice = (start, end) => {
    const slicedProjects = loadedProjects.slice(start, end);
    // arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedProjects];
    setPostsToShow(slicedProjects);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, [postsPerPage]);

  if (isLoading) {
    return (
      <section>
        <p>Loading Projects</p>
      </section>
    );
  }

  return (
    <div className={classes.main}>
      <IndividualProject eachProject={postsToShow} />
      <button onClick={handleShowMorePosts}>Load more</button>
    </div>
  );
}

export default Projects;
