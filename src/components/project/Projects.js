import { useCallback, useState, useEffect } from "react";
import IndividualProject from "./IndividualProject";
import classes from "./Projects.module.css";

function Projects() {
  const [postsPerPage, setpostsPerPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProjects, setLoadedProjects] = useState([]);
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(4);

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

  const loopWithSlice = useCallback(
    (start, end) => {
      const slicedProjects = loadedProjects.slice(start, end);
      setPostsToShow(slicedProjects);
    },
    [loadedProjects]
  );

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, [postsPerPage, loopWithSlice]);

  if (isLoading) {
    return (
      <section>
        <p>Loading Projects</p>
      </section>
    );
  }

  return (
    <div className={classes.main} id="projects">
      <IndividualProject eachProject={postsToShow} />
      <div className={classes.load}>
        <button onClick={handleShowMorePosts}>Load More</button>
      </div>
    </div>
  );
}

export default Projects;
