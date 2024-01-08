import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    axios
      .get(`${API_URL}/projects?_embed=tasks`)
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="ProjectListPage">
      <Link to="/projects/create">
        <button>Create Project</button>
      </Link>
      {projects.map((project) => {
        return <ProjectCard key={project.id} {...project} />;
      })}
    </div>
  );
}

export default ProjectListPage;
