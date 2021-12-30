import { NavLink } from "react-router-dom";
import classes from "./IndividualProject.module.css";

function IndividualProject(props) {
  let screenShot = "//image.thum.io/get/";
  return (
    <ul className={classes.project}>
      {props.eachProject.map(element => (
        <li key={element.id}>
          <div className={classes.project__info}>
            <h3 className={classes.project__title}>{element.name}</h3>
            <address>{element.url}</address>
            <img src={screenShot + element.url} alt="Logo" />
            <p>{screenShot + element.url + ".com"}</p>
            <p>{element.description}</p>
            <p>{element.questions}</p>
            <NavLink
              className={classes.project__button}
              to={`/my-projects/${element.id}`}
            >
              GIVE FEEDBACK
            </NavLink>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default IndividualProject;
