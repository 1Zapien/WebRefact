import classes from "./FeedbackBanner.module.css";
import bannerImg from "../../images/collaborating2.svg";

function FeedbackBanner() {
  return (
    <div className={classes.feedback}>
      <img className={classes.feedback__image} src={bannerImg} alt="Hero"></img>
      <div className={classes.feedback__info}>
        <h2>Practice for code review</h2>
        <p>
          When providing feedback on personal projects here at WebRefact you
          will also be practicing your Code Reviewing skills. <br />
          <br />
          Code review is a skill that will be useful in future tech jobs so make
          sure your feedback is constructive.
        </p>
        <a
          href={"https://google.github.io/eng-practices/review/"}
          aria-label="link to github page that gives info on giving better feedback"
          target="_blank"
          rel="noreferrer"
        >
          Google coding review guide to provide better feedback
        </a>
      </div>
    </div>
  );
}

export default FeedbackBanner;
