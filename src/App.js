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
        <Route path="/submit-project" element={<SubmitNewProject />}></Route>
        <Route path="/my-projects" element={<ProjectReviewLanding />}></Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
