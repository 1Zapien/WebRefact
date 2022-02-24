import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "../../images/Logo.svg";
function NavBar() {
  let activeStyle = {
    // color: "#6998ab"
    fontWeight: "700"
  };

  return (
    <header className={classes.nav}>
      <img className={classes.logo} src={logo} alt="Logo" />
      {/* <div className={classes.logo}>WebRefact</div> */}
      <nav className={classes.navigation}>
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
