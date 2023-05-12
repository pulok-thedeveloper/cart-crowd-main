import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineNightsStay } from "react-icons/md";
import { FiMaximize } from "react-icons/fi";

const DashboardNavbar = () => {
  return (
    <div className="h-32 border-b bg-white grid grid-cols-2 items-center justify-between px-10 sticky top-0">
      <div className="flex">
        <input
          className="outline-none border p-5 rounded w-2/3 text-2xl"
          type="text"
          placeholder="Search"
        />
        <button className="p-5 text-3xl border">
          <IoIosSearch />
        </button>
      </div>
      <div className="flex gap-10 justify-end">
        <button className="text-4xl">
          <MdOutlineNightsStay />
        </button>
        <button className="text-4xl">
          <FiMaximize />
        </button>
        <button className="text-4xl">
          <IoNotificationsOutline />
        </button>
        <div>
          <div className="text-right">
            <h3 className="text-2xl">Md Golam Mehedi Pulok</h3>
            <p className="text-xl text-green-500">Admin</p>
          </div>
          <img src="" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
