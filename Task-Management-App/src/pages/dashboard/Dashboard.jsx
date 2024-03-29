import React from "react";
import "./dashboard.css";
import { useCollection } from "../../hooks/useCollection";
import ProjectList from "../../components/projectList/ProjectList";

const Dashboard = () => {
  const { documents, error } = useCollection("projects");
  return (
    <div>
      <h1 className="page-title">Dashboard</h1>
      {error && <p className="error">{error}</p>}
      {documents && <ProjectList projects={documents} />}
    </div>
  );
};

export default Dashboard;
