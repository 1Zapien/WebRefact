import NavBar from "./Navbar";
import classes from "./MainLayout.module.css";

function MainLayout(props) {
  return (
    <div className={classes.main}>
      <NavBar />
      <main className={classes.main__content}>{props.children}</main>
    </div>
  );
}

export default MainLayout;
