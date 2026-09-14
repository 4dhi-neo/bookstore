import React, { useState } from "react";
import AdminHeader from "../Components/AdminHeader";
import Footer from "../../User/Components/Footer";
import AdminSidebar from "../Components/AdminSidebar";

function Resources() {
  const [toggle, setToggle] = useState(true);

  const trueStyle = "border-s-1 border-t-1 border-e-1 p-3";
  const falseStyle = "border-b-1 p-3";

  return (
    <>
      <AdminHeader />

      <div className=" ">
        <div className=" min-h-[70vh] grid h-full grid-cols-1 md:grid-cols-12">
          {/* Sidebar */}
          <div className="md:col-span-3">
            <AdminSidebar />
          </div>

          {/* Resources */}
          <div className="p-3 md:col-span-9">
            <h1 className="text-center text-3xl font-semibold">Resources</h1>

            {/* Toggle */}
            <div className="my-5 flex justify-center">
              <button
                className={toggle ? trueStyle : falseStyle}
                onClick={() => setToggle(true)}
              >
                Users
              </button>

              <button
                className={toggle ? falseStyle : trueStyle}
                onClick={() => setToggle(false)}
              >
                Books
              </button>
            </div>

            {toggle ? (
              /* Users */
              <div className="flex flex-wrap justify-around gap-4">
                {/* User 1 */}
                <div className="w-[20rem] rounded-md border border-gray-200 bg-gray-100 p-4 shadow-md">
                  <h1 className="my-2 text-center font-semibold">
                    User ID : 787809056789
                  </h1>

                  <div className="flex flex-col items-center">
                    <img
                      src="https://i.pravatar.cc/150?img=12"
                      className="h-24 w-24 rounded-full object-cover"
                      alt="user"
                    />

                    <h1 className="mt-2 text-center text-lg font-bold">
                      User Name
                    </h1>

                    <p className="text-center text-gray-600">user@gmail.com</p>

                    <button className="mt-3 w-full rounded-sm bg-red-600 p-2 text-white hover:bg-red-700">
                      Remove
                    </button>
                  </div>
                </div>

                {/* User 2 */}
                {/* <div className="w-[20rem] rounded-md border border-gray-200 bg-gray-100 p-4 shadow-md">
                  <h1 className="my-2 text-center font-semibold">
                    User ID : 787809056790
                  </h1>

                  <div className="flex flex-col items-center">
                    <img
                      src="https://i.pravatar.cc/150?img=32"
                      className="h-24 w-24 rounded-full object-cover"
                      alt="user"
                    />

                    <h1 className="mt-2 text-center text-lg font-bold">
                      Another User
                    </h1>

                    <p className="text-center text-gray-600">
                      another@gmail.com
                    </p>

                    <button className="mt-3 w-full rounded-sm bg-red-600 p-2 text-white hover:bg-red-700">
                      Remove
                    </button>
                  </div>
                </div> */}
              </div>
            ) : (
              /* Books */
              <div className="flex flex-wrap justify-around gap-4">
                {/* Book 1 */}
                <div className="w-[20rem] rounded-md border border-gray-200 bg-gray-100 p-4 shadow-md">
                  <h1 className="my-2 text-center font-semibold">
                    Book ID : 987654321
                  </h1>

                  <div className="flex flex-col items-center">
                    <img
                      src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&q=80"
                      className="h-48 w-[60%] object-cover"
                      alt="Harry Potter"
                    />

                    <h1 className="mt-2 text-center text-lg font-bold">
                      Harry Potter
                    </h1>

                    <p className="text-center text-gray-600">₹300</p>

                    <button className="mt-3 w-full rounded-sm bg-green-600 p-2 text-white hover:bg-green-700">
                      Approve
                    </button>
                  </div>
                </div>

                {/* Book 2 */}
                {/* <div className="w-[20rem] rounded-md border border-gray-200 bg-gray-100 p-4 shadow-md">
                  <h1 className="my-2 text-center font-semibold">
                    Book ID : 987654322
                  </h1>

                  <div className="flex flex-col items-center">
                    <img
                      src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80"
                      className="h-48 w-[60%] object-cover"
                      alt="The Great Gatsby"
                    />

                    <h1 className="mt-2 text-center text-lg font-bold">
                      The Great Gatsby
                    </h1>

                    <p className="text-center text-gray-600">₹350</p>

                    <button className="mt-3 w-full rounded-sm bg-green-600 p-2 text-white hover:bg-green-700">
                      Approve
                    </button>
                  </div>
                </div> */}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Resources;