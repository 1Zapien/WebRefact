import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
function NavBar() {
  let activeStyle = {
    color: "#88c0c2"
  };

  return (
    <header className={classes.nav}>
      <div className={classes.logo}>WebRefact</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/home"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/submit-project"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Submit Project
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// activeClassName={classes.active}
/* <li>
<Link to="/my-projects">My Projects</Link>
</li> */

export default NavBar;
