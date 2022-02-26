import NavBar from "./Navbar";
import classes from "./MainLayout.module.css";
import Footer from "./Footer";

function MainLayout(props) {
  return (
    <div className={classes.main}>
      <NavBar />
      <main className={classes.main__content}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
