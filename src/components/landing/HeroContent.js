import classes from "./HeroContent.module.css";

function HeroContent() {
  return (
    <section className={classes.intro}>
      <div className={classes.intro__info}>
        <h1 className={classes.intro__title}>Improve your personal Project</h1>
        <p>
          Get feedback on your personal project from other users. Improve your
          coding skills while working on your personal project.
        </p>
      </div>
      <img
        className={classes.intro__image}
        src={
          "https://global-uploads.webflow.com/5e3ce2ec7f6e53c045fe7cfa/604222e273860c0a9c396005_603dd7b33291d9d0231f3528_Frame-142.png"
        }
        alt="Hero"
      ></img>
    </section>
  );
}

export default HeroContent;
