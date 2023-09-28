import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Layout.scss'

export default function Layout() {
  return (
    <>
      <header>
        <div className="container">
        <Link to="/projects">Projects List</Link>
        </div>      
        </header>
        <Outlet />
  
    </>
  );
}
