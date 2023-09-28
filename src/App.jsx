import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { projectsList } from './reducers/projectsListReducer'
//components
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import ProjectsListPage from "./pages/ProjectsListPage";
import ProjectItemPage from "./pages/ProjectItemPage";
//styles
import "./App.scss";

export default function App() {
  const projectsList = useSelector((state) => state.projectsList);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="projects" element={<ProjectsListPage />} />
          <Route path="projects/:projectId" element={<ProjectItemPage projectsList={projectsList} />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </main>
  );
}


