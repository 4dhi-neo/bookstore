import React from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

function AdminSidebar() {

  const location = useLocation();

  return (
    <div className="bg-sky-600 min-h-[70vh] flex items-center">
      
      <div className="flex flex-col items-center gap-3 w-full h-full">

        <img
          src="https://cdn-icons-png.flaticon.com/512/17003/17003310.png"
          alt="adminicon"
          width="60%"
        />

        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <div className="flex flex-col items-start gap-3">

          {/* Dashboard */}
          <Link to="/admin">
            <label className="flex justify-center items-center gap-2">
              <input
                type="radio"
                name="option"
                checked={location.pathname === "/admin"}
                readOnly
              />
              <MdSpaceDashboard />
              Dashboard
            </label>
          </Link>


          {/* Resources */}
          <Link to="/admin/resources">
            <label className="flex justify-center items-center gap-2">
              <input
                type="radio"
                name="option"
                checked={location.pathname === "/admin/resources"}
                readOnly
              />
              <GrResources />
              Resources
            </label>
          </Link>


          {/* Settings */}
          <Link to="/admin/settings">
            <label className="flex justify-center items-center gap-2">
              <input
                type="radio"
                name="option"
                checked={location.pathname === "/admin/settings"}
                readOnly
              />
              <IoMdSettings />
              Settings
            </label>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default AdminSidebar