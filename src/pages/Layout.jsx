import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <Link to="/projects">Projects List</Link>
        <Outlet />
      </header>
    </>
  );
}
