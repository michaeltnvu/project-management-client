import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function EditProjectPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // <== ADD
    axios
      .get(`${API_URL}/projects/${projectId}`)
      .then((response) => {
        /* 
          We update the state with the project data coming from the response.
          This way we set inputs to show the actual title and description of the project
        */
        const oneProject = response.data;
        setTitle(oneProject.title);
        setDescription(oneProject.description);
      })
      .catch((error) => console.log(error));
  }, [projectId]);

  const handleFormSubmit = (e) => {
    // <== ADD
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = { title, description };

    // Make a PUT request to the API update the project
    axios
      .put(`${API_URL}/projects/${projectId}`, requestBody)
      .then((response) => {
        // Once the request is resolved successfully and the project
        // is updated we navigate back to the Project Details page (client-side)
        navigate(`/projects/${projectId}`);
      })
      .catch((err) => console.log(err));
  };

  const deleteProject = () => {
    //  <== ADD
    // Make a DELETE request to delete the project
    axios
      .delete(`${API_URL}/projects/${projectId}`)
      .then(() => {
        // Once the delete request is resolved successfully
        // navigate back to the list of projects.
        navigate("/projects");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update Project</button>
      </form>
      <button onClick={deleteProject}>Delete Project</button>
    </div>
  );
}

export default EditProjectPage;
