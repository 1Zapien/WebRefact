import classes from "./Footer.module.css";
import logo from "../../images/Logo.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      {/* <img className={classes.logo} src={logo} alt="Logo" /> */}
      <div className={classes.footer}>
        <div>
          <img className={classes.logo} src={logo} alt="Logo" />
          <p className={classes.short}>
            Improve your personal projects with feedback from others.
          </p>
        </div>
        <ul>
          <li>Content</li>
          <li>
            <NavLink to="submit-project">Submit Project</NavLink>
          </li>
          <li>
            <a href={"/#projects"} aria-label="link to projects page">
              Projects
            </a>
          </li>
        </ul>
        <ul>
          <li>Explore</li>
          <li>
            <a
              href={
                "https://developers.google.com/web/fundamentals/accessibility/semantics-aria"
              }
              aria-label=" google link explaining aria"
              target="_blank"
              rel="noreferrer"
            >
              Accessible code
            </a>
          </li>
          <li>
            <a
              href={"http://getbem.com/introduction/"}
              aria-label="introduction to bem link"
              target="_blank"
              rel="noreferrer"
            >
              BEM Methodology
            </a>
          </li>
          <li>
            <a
              href={
                "https://stackoverflow.blog/2021/12/23/best-practices-for-writing-code-comments/"
              }
              aria-label="stackoverflow link for commenting code effectively "
              target="_blank"
              rel="noreferrer"
            >
              Commenting Code
            </a>
          </li>
          <li>
            <a
              href={
                "https://www.drupal.org/docs/develop/managing-a-drupalorg-theme-module-or-distribution-project/documenting-your-project/readme-template"
              }
              aria-label="drupal link to writing a readme"
              target="_blank"
              rel="noreferrer"
            >
              Writing README
            </a>
          </li>
        </ul>

        <ul>
          <li>Contact</li>
          <li>
            <a href={"/"}>Instagram</a>
          </li>
          <li>
            <a href={"/"}>Facebook</a>
          </li>
          <li>
            <a href={"/"}>Twitter</a>
          </li>
        </ul>
      </div>

      <p className={classes.copyright}>Copyright &copy; 2022 Juan Zapien </p>
    </footer>
  );
}

export default Footer;
