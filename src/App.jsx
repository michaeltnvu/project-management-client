import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateProjectPage from "./pages/CreateProjectPage";
import EditProjectPage from "./pages/EditProjectPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import ProjectListPage from "./pages/ProjectListPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route exact path="/projects/create" element={<CreateProjectPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/projects/edit/:projectId" element={<EditProjectPage />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
export default App;
