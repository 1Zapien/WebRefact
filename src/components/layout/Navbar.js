import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
function NavBar() {
  return (
    <header className={classes.nav}>
      <div className={classes.logo}>WebRefact</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/">All Projects</Link>
          </li>
          <li>
            <Link to="/review-project">Project Review</Link>
          </li>
          <li>
            <Link to="/submit-project">Submit Project</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
