import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
function NavBar() {
  return (
    <header className={classes.nav}>
      <div className={classes.logo}>WebRefact</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/submit-project">Submit Project</Link>
          </li>
          <li>
            <Link to="/my-projects">My Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
