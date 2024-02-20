import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        This are the list of projects are available with pagination and sort by
        category.
      </div>
    </>
  );
};
export default Projects;
