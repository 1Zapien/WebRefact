import classes from "./HeroContent.module.css";
import hero from "../../images/Brainstorming.svg";
import { Link } from "react-router-dom";

function HeroContent() {
  return (
    <section className={classes.intro}>
      <div className={classes.intro__info}>
        <h1 className={classes.intro__title}>Improve your personal Project</h1>
        <p>
          Get feedback on your personal project from other users. Improve your
          coding skills while working on your personal project.
        </p>
        <Link to="/submit-project" className={classes.button}>
          Submit Project
        </Link>
      </div>
      <div className={classes.intro__background}>
        <img className={classes.intro__image} src={hero} alt="Hero"></img>
      </div>
    </section>
  );
}

export default HeroContent;
