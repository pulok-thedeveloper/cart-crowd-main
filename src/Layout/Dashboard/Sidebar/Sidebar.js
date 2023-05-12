import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import './Sidebar.css';
import { RxDashboard, RxExit } from 'react-icons/rx';
import { FiBox, FiShoppingBag } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="bg-white h-screen w-[300px] border-r sticky top-0 left-0">
      <div className="flex justify-between p-10 items-center border-b">
        <Link to="/dashboard" className="text-5xl font-semibold">
          CartCrowd
        </Link>
        <AiOutlineMenuFold className="text-3xl cursor-pointer" />
      </div>
      <ul className="pl-10 pt-10 text-3xl grid gap-5 sidebar-list">
        <li>
          <NavLink className="hover:text-primary px-10 py-5 rounded-l-[100px] w-full flex items-cener gap-5" to="/dashboard/"><RxDashboard/> Dashboard</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-primary px-10 py-5 rounded-l-[100px] w-full flex items-cener gap-5" to="/dashboard/products"><FiBox/> Products</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-primary px-10 py-5 rounded-l-[100px] w-full flex items-cener gap-5" to="/dashboard/orders"><FiShoppingBag/> Orders</NavLink>
        </li>
        <li>
          <button className="hover:text-primary px-10 py-5 rounded-l-[100px] w-full flex items-cener gap-5 text-left"><RxExit/> Log Out</button>
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default Sidebar;
