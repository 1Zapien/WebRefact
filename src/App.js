import "./App.css";
import AllProjects from "./pages/AllProjects";
import ProjectReviewLanding from "./pages/ProjectReviewLanding";
import SubmitNewProject from "./pages/SubmitNewProject";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<AllProjects />}></Route>
        <Route
          path="/review-project"
          element={<ProjectReviewLanding />}
        ></Route>
        <Route path="/submit-project" element={<SubmitNewProject />}></Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
