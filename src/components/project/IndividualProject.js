import { NavLink } from "react-router-dom";
import classes from "./IndividualProject.module.css";

function IndividualProject(props) {
  let screenShot = "//image.thum.io/get/";
  console.log(window.location.pathname);
  return (
    <ul className={classes.project}>
      {props.eachProject.map(element => (
        <li key={element.id}>
          <div className={classes.project__info}>
            <img src={screenShot + element.url} alt="Logo" />
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
