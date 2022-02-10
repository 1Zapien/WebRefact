import { NavLink } from "react-router-dom";
import classes from "./IndividualProject.module.css";
import { useEffect } from "react";

function IndividualProject(props) {
  let screenShot = "//image.thum.io/get/";

  useEffect(() => {
    fetch("https://api.github.com/repos/1Zapien/RunDay/languages")
      .then(response => response.json())
      .then(data => {
        for (var key in data) {
          console.log(key);
        }
      });
  }, []);

  return (
    <ul className={classes.project}>
      {props.eachProject.map(element => (
        <li key={element.id}>
          <div className={classes.project__info}>
            <div className={classes.project__img}>
              <img src={screenShot + element.url} alt="Logo" />
            </div>
            <h3 className={classes.project__title}>{element.name}</h3>
            <p>{element.description}</p>
            <address>{element.url}</address>
            {/* <p>{screenShot + element.url + ".com"}</p> */}
            <p>{element.questions}</p>
            {window.location.pathname === "/home" ? (
              <NavLink
                className={classes.project__button}
                to={`/my-projects/${element.id}`}
              >
                GIVE FEEDBACK
              </NavLink>
            ) : (
              ""
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default IndividualProject;
