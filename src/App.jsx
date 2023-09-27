import React from "react";
import { Routes, Route } from "react-router-dom";
//components
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import ProjectsListPage from "./pages/ProjectsListPage";
//styles
import "./App.scss";

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/projects" element={<ProjectsListPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </main>
  );
}


