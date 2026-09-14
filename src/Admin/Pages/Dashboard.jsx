import React from "react";
import AdminHeader from "../Components/AdminHeader";
import AdminSidebar from "../Components/AdminSidebar";
import Footer from "../../User/Components/Footer";
import { FaBook } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";



function Dashboard() {
  return (
    <>
      <AdminHeader />
      {/* DASHBOARD */}
      <div className=" ">
        <div className="w-full min-h-[70vh] grid sm:grid-cols-1 md:grid-cols-12">
          <div className="col-span-3">
            <AdminSidebar />
          </div>
          <div className="md:col-span-9">
            <div className="grid gap-2 m-2 md:grid-cols-3">
              <div className="bg-violet-700 text-white p-10 rounded-lg text-lg">
                <FaBook/>{' '}
                Total Number of Books
                100+
              </div>
              <div className="bg-green-700 text-white p-10 rounded-lg text-lg">
                <FaUserCheck/>{' '}
                Total Number of users
                100+
              </div>
              <div className="bg-amber-600 text-white p-10 rounded-lg text-lg">
                <GrUserWorker/>{' '}
                Total Number of Employees
                100+
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;