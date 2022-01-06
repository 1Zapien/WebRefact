import "./App.css";
import AllProjects from "./pages/AllProjects";
import ProjectReviewLanding from "./pages/ProjectReviewLanding";
import SubmitNewProject from "./pages/SubmitNewProject";
import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home/*" element={<AllProjects />}></Route>
        <Route path="/submit-project" element={<SubmitNewProject />}></Route>
        <Route
          path="/my-projects/:projectId"
          element={<ProjectReviewLanding />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
