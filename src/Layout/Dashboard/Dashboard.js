import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./Navbar/DashboardNavbar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-full">
        <DashboardNavbar></DashboardNavbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
