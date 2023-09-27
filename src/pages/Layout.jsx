import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <Link to="/">Projects List</Link>
        <Outlet />
      </header>
    </>
  );
}
