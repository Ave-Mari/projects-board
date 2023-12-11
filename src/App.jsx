import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { projectsList } from "./reducers/projectsListReducer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
//components
import Layout from "./pages/Layout/Layout";
import ErrorPage from "./pages/ErrorPage";
import ProjectsListPage from "./pages/ProjectsListPage/ProjectsListPage";
import ProjectItemPage from "./pages/ProjectItemPage/ProjectItemPage";
//styles
import "./App.scss";

export default function App() {
  const projectsList = useSelector((state) => state.projectsList);
  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="projects" element={<ProjectsListPage />} />
            <Route path="projects/:projectId" element={<ProjectItemPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </DndProvider>
    </main>
  );
}
