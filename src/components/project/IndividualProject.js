import { Link } from "react-router-dom";
import classes from "./IndividualProject.module.css";
import GitLanguages from "./GitLanguages";

function IndividualProject(props) {
  let screenShot = "//image.thum.io/get/";

  return (
    <div className={classes.project}>
      <ul>
        {props.eachProject.map(element => (
          <li key={element.id}>
            <div className={classes.project__info}>
              <div className={classes.project__img}>
                <img src={screenShot + element.url} alt="Logo" />
              </div>
              <h3 className={classes.project__title}>{element.name}</h3>
              <GitLanguages gitUrl={element.sourceUrl} />
              <p>{element.description}</p>
              {window.location.pathname === "/home" ? (
                <Link
                  className={classes.project__button}
                  to={`/my-projects/${element.id}`}
                >
                  GIVE FEEDBACK
                </Link>
              ) : (
                ""
              )}
              <div className={classes.urls}>
                <a href={element.url} target="_blank" rel="noreferrer">
                  Project Link
                </a>
                <a href={element.sourceUrl} target="_blank" rel="noreferrer">
                  Source code
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndividualProject;
