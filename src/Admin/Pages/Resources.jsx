import React, { useState, useEffect } from "react";
import AdminHeader from "../Components/AdminHeader";
import Footer from "../../User/Components/Footer";
import AdminSidebar from "../Components/AdminSidebar";
import {
  adminAllBookApi,
  adminApproveBookApi,
  adminAllUserApi,
} from "../../services/allApi";
import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../../../api/axiosInstance";

function Resources() {
  const [toggle, setToggle] = useState(true);
  const [allBooks, setAllbooks] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const trueStyle = "border-s-1 border-t-1 border-e-1 p-3";
  const falseStyle = "border-b-1 p-3";

  useEffect(() => {
    handleAllBooks();
    handleAllUsers();
  }, []);

  const handleAllBooks = async () => {
    const response = await adminAllBookApi();
    console.log(response);
    if (response.status === 200) {
      setAllbooks(response.data);
    }
  };

  const handleApprovebook = async (id) => {
    const response = await adminApproveBookApi(id);
    console.log(response);
    if (response.status === 200) {
      handleAllBooks();
    } else {
      toast.warning("something went wrong!");
    }
  };

  const handleAllUsers = async () => {
    const response = await adminAllUserApi();
    // console.log(response)
    if (response.status === 200) {
      setAllUsers(response.data);
    }
  };

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
              allUsers.length > 0 ? (
                /* Users */
                <div className="flex flex-wrap justify-around gap-4">
                  {allUsers.map((item) => (
                    <div
                      key={item._id}
                      className="w-[20rem] rounded-md border border-gray-200 bg-gray-100 p-4 shadow-md"
                    >
                      <h1 className="my-2 text-center font-semibold">
                        {item?._id}
                      </h1>

                      <div className="flex flex-col items-center">
                        {item?.picture === "" ? (
                          <img
                            src="https://i.pravatar.cc/150?img=12"
                            className="h-24 w-24 rounded-full object-cover"
                            alt="user"
                          />
                        ) : item?.picture?.startsWith(
                            "http://lh3.googleusercontent.com",
                          ) ? (
                          <img
                            src={item?.picture}
                            className="h-24 w-24 rounded-full object-cover"
                            alt="user"
                          />
                        ) : (
                          <img
                            src={`${axiosInstance.defaults.baseURL}/uploads/${item?.picture}`}
                            className="h-24 w-24 rounded-full object-cover"
                            alt="user"
                          />
                        )}

                        <h1 className="mt-2 text-center text-lg font-bold">
                          {item?.username}
                        </h1>

                        <p className="text-center text-gray-600">
                          {item?.email}
                        </p>

                        <button className="mt-3 w-full rounded-sm bg-red-600 p-2 text-white hover:bg-red-700">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <h3 className="my-6 text-center text-red-600">
                  No Users Avilable!!
                </h3>
              )
            ) : (
              /* Books */
              <div>
                {allBooks.length > 0 ? (
                  <div className="flex flex-wrap justify-around gap-4">
                    {allBooks.map((item) => (
                      <div
                        key={item._id}
                        className="flex flex-col items-center"
                      >
                        <img
                          src={item.imageUrl}
                          className="h-48 w-[60%] object-cover"
                          alt={item.title}
                        />

                        <h1 className="mt-2 text-center text-lg font-bold">
                          {item.title}
                        </h1>

                        <p className="text-center text-gray-600">
                          ₹{item.price}
                        </p>

                        {item.status === "pending" ? (
                          <button
                            onClick={() => {
                              handleApprovebook(item?._id);
                            }}
                            className="mt-3 w-full rounded-sm bg-green-600 p-2 text-white hover:bg-green-700"
                          >
                            Approve
                          </button>
                        ) : (
                          <h3 className="my-3 text-center text-green-500">
                            Approved
                          </h3>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <h1 className="my-6 text-center text-2xl text-red-600">
                    NO Book Available!!
                  </h1>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <ToastContainer position="top-center" />
      <Footer />
    </>
  );
}

export default Resources;
