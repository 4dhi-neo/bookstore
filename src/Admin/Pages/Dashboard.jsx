import React from "react";
import AdminHeader from "../Components1/AdminHeader";
import AdminSidebar from "../Components1/AdminSidebar";
import Footer from "../../User/Components/Footer";
import { FaBook } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { generateMockData, RechartsDevtools } from "@recharts/devtools";
import { ResponsiveContainer } from "recharts";
import { Pie, PieChart } from "recharts";

function Dashboard() {
  const data = [
    {
      name: "Wings of Fire",
      count: 500,
    },
    {
      name: "Aadujeevitham",
      count: 200,
    },
    {
      name: "Twilights",
      count: 280,
    },
    {
      name: "The Alchemist",
      count: 300,
    },
  ];
  const data1 = [
    {
      name: "Wings of Fire",
      price: 800,
    },
    {
      name: "Aadujeevitham",
      price: 700,
    },
    {
      name: "Twilights",
      price: 1580,
    },
    {
      name: "The Alchemist",
      price: 1300,
    },
  ];

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
                <FaBook /> Total Number of Books 100+
              </div>
              <div className="bg-green-700 text-white p-10 rounded-lg text-lg">
                <FaUserCheck /> Total Number of users 100+
              </div>
              <div className="bg-amber-600 text-white p-10 rounded-lg text-lg">
                <GrUserWorker /> Total Number of Employees 100+
              </div>
            </div>
            <div className="grid-md:grid-cols-2">
              <div>
                {/* Book purchase ratio -Bar chart */}
                <ResponsiveContainer width={"100%"} height={"300"}>
                  <BarChart
                    responsive
                    data={data}
                    margin={{
                      top: 5,
                      right: 0,
                      left: 0,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid />
                    <XAxis dataKey="name" />
                    <YAxis width="auto" />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="name"
                      fill="#8B0000"
                      radius={[10, 10, 0, 0]}
                    />
                    <Bar
                      dataKey="count"
                      fill="#8B0000"
                      radius={[10, 10, 0, 0]}
                    />
                    <RechartsDevtools />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                {/* grow chart - Pie Chart */}
                 <ResponsiveContainer width={"100%"} height={"300"}>
                <PieChart
                  responsive
                >
                  <Pie
                    data={data}
                    dataKey="count"
                    cx="50%"
                    cy="50%"
                    outerRadius="50%"
                    fill="#DC143C"
                    stroke="white"
                    
                  />
                  <Pie
                    data={data1}
                    dataKey="price"
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="80%"
                    fill="#0000FF"
                    stroke="white"
                    label
                    
                  />
                  <Tooltip />
                  <RechartsDevtools />
                </PieChart>
                </ResponsiveContainer>
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
