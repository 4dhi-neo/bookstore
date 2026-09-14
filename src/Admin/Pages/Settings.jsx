import React from "react";
import AdminHeader from "../Components/AdminHeader";
import Footer from "../../User/Components/Footer";
import AdminSidebar from "../Components/AdminSidebar";
import { FaRegEdit } from "react-icons/fa";

function Settings() {
  return (
    <>
      <AdminHeader />

      <div className="">
        <div className=" min-h-[70vh] grid grid-cols-1 md:grid-cols-12">
          {/* Sidebar */}
          <div className="md:col-span-3">
            <AdminSidebar />
          </div>

          {/* Settings Content */}
          <div className="md:col-span-9 p-4">
            <h1 className="text-3xl text-center my-3">Admin Settings</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Description */}
              <div className="p-4">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nulla obcaecati assumenda dolores ratione itaque nesciunt
                  laudantium iure cupiditate sit suscipit necessitatibus, saepe
                  facere libero mollitia laborum delectus beatae optio cumque.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores numquam sed corrupti ratione a vitae, omnis rerum
                  ipsa. Assumenda deleniti atque reprehenderit neque aspernatur
                  porro numquam expedita cumque doloremque accu Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Itaque ducimus
                  corrupti architecto consequatur assumenda aut nihil atque,
                  earum id sint distinctio labore iure exercitationem harum
                  mollitia eligendi velit quis. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Ab animi iure accusantium
                  doloribus omnis id fugiat. Sint voluptates beatae
                  necessitatibus. Beatae doloremque ducimus quisquam nihil optio
                  quos dolor! Cum, neque. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Laudantium culpa vitae quia enim
                  delectus, accusantium, quasi hic vero cum doloremque dolorum
                  voluptatibus pariatur unde aperiam saepe possimus minima.
                  Eveniet, ratione! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Autem soluta libero aliquam doloremque
                  excepturi eos dolores, debitis cupiditate minima, unde magnam
                  iste odit expedita at vel. Odio consequatur ad sequi?Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Molestiae a
                  sit repellendus laboriosam quam illo ullam ratione animi
                  quibusdam tempora, autem ipsa repudiandae temporibus
                  doloremque soluta suscipit? Aliquam, reiciendis voluptas.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  illo fuga, illum fugit perferendis praesentium sit unde. Quas
                  minima maxime, atque explicabo, ratione tempore vero
                  doloremque error iusto magnam expedita! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Odit ut inventore
                </p>
              </div>

              {/* Settings Form */}
              <div className="bg-blue-500 p-5 rounded-lg">
                {/* Profile Image */}
                <div className="flex justify-center mb-5">
                  <label htmlFor="profpic" className="relative cursor-pointer">
                    <input type="file" id="profpic" className="hidden" />

                    <img
                      src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                      alt="Profile"
                      className="h-[250px] w-[250px] object-cover rounded-full"
                    />

                    <span className="absolute bottom-3 right-3 p-3 bg-yellow-400 text-white rounded-lg">
                      <FaRegEdit />
                    </span>
                  </label>
                </div>

                {/* Username */}
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full bg-white border my-3 p-3 rounded"
                />

                {/* Password */}
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-white border mb-3 p-3 rounded"
                />

                {/* Confirm Password */}
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full bg-white border mb-4 p-3 rounded"
                />

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="bg-red-500 text-white p-3 rounded hover:bg-white hover:text-red-500 transition"
                  >
                    RESET
                  </button>

                  <button
                    type="button"
                    className="bg-green-500 text-white p-3 rounded hover:bg-white hover:text-green-500 transition"
                  >
                    UPDATE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Settings;
