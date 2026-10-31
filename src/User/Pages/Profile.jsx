import React, { useState, useEffect, use, useTransition } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaRegEdit } from "react-icons/fa";
import ProfileUpdate from "../Components/ProfileUpdate";
import axiosInstance from "../../../api/axiosInstance";
import SelBook from "../Components/SelBook";
import {
  userAddedBookApi,
  deleteBookApi,
  purchasedBookApi,
} from "../../services/allApi";
import { toast, ToastContainer } from "react-toastify";

function Profile() {
  const [username, setUserName] = useState("");
  const [dp, setDp] = useState("");
  const [bio, setBio] = useState("");
  const [sidebar, setSidebar] = useState(false);

  const [sellStatus, setSellStatus] = useState(true);
  const [bookStatus, setBookStatus] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState(false);

  const [userBookList, setUserBookList] = useState([]);
  const [PurchaseList, setPurchaseList] = useState([]);

  const trueClass = "p-3 border-t-2 border-s-2 border-e-2";
  const falseClass = "p-3 border-b-2";

  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"));
      setDp(user?.picture);
      setUserName(user?.username);
      setBio(user?.bio);
    }
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      handleUserAddedBooks();
    }
  }, [bookStatus]);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      handlePurchasedBooks();
    }
  }, [purchaseStatus]);

  const handleUserAddedBooks = async () => {
    const response = await userAddedBookApi();
    console.log(response);
    if (response.status === 200) {
      setUserBookList(response.data);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      const response = await deleteBookApi(id);
      if (response.status == 200) {
        toast.success("Book Removed!!");
        handleUserAddedBooks();
      } else {
        toast.error("Remove Book Failed!!");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong!!");
    }
  };

  const handlePurchasedBooks = async () => {
    const response = await purchasedBookApi();
    if (response.status == 200) {
    }
  };

  return (
    <div>
      <Header />

      {/* Profile */}
      {sidebar && <ProfileUpdate setSidebar={setSidebar} />}

      <div className="w-full">
        {/* Profile Banner */}
        <div className="relative h-[50vh] bg-green-950">
          <div className="absolute -bottom-30 ml-10 h-[80%]">
            <img
              src={
                dp
                  ? `${axiosInstance.defaults.baseURL}/uploads/${dp}`
                  : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              alt="profile"
              className="h-full rounded-full"
            />
          </div>
        </div>

        {/* Profile Details */}
        <div className="px-10">
          <h1 className="mt-35 mb-5 font-bold">{username}</h1>

          <div className="mb-5 grid grid-cols-2">
            <div>
              <p className="text-justify">{bio}</p>
            </div>

            <div className="flex items-start justify-end">
              <button
                className="flex items-center gap-2 rounded-md bg-blue-500 px-5 py-3 text-white hover:bg-green-500"
                onClick={() => setSidebar(!sidebar)}
              >
                Edit
                <FaRegEdit />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-20 py-30">
        {/* Toggle button group */}
        <div className="flex justify-center">
          <button
            className={sellStatus ? trueClass : falseClass}
            onClick={() => {
              setSellStatus(true);
              setBookStatus(false);
              setPurchaseStatus(false);
            }}
          >
            Sell Book
          </button>

          <button
            className={bookStatus ? trueClass : falseClass}
            onClick={() => {
              setSellStatus(false);
              setBookStatus(true);
              setPurchaseStatus(false);
            }}
          >
            Book Status
          </button>

          <button
            className={purchaseStatus ? trueClass : falseClass}
            onClick={() => {
              setSellStatus(false);
              setBookStatus(false);
              setPurchaseStatus(true);
            }}
          >
            Purchase History
          </button>
        </div>

        {/* Content */}
        <div className="mt-8 text-center">
          {/* SELL BOOK */}
          {sellStatus && <SelBook />}

          {/* BOOK STATUS */}
          {bookStatus && (
            <div className="p-2">
              {/* Book Details */}
              {userBookList.length > 0 ? (
                <>
                  {userBookList.map((item) => (
                    <div className="flex flex-col gap-6 border p-4 md:flex-row md:items-center md:justify-between">
                      <div className="md:flex-1">
                        <h1 className="text-xl font-bold">{item?.title}</h1>

                        <h4 className="font-bold text-green-600">
                          {item?.price}
                        </h4>

                        <p className="mt-2 text-justify">{item?.abstract}</p>
                      </div>

                      {/* Book Image */}
                      <div className="flex w-full flex-col items-center gap-3 md:w-32">
                        {item?.status == "approved" ? (
                          <div className="mt-3 flex items-center gap-4">
                            <span className="rounded-md border-2 border-green-600 px-4 py-2 font-bold text-green-600">
                              APPROVED
                            </span>
                          </div>
                        ) : (
                          <div className="mt-3 flex items-center gap-4">
                            <span className="rounded-md border-2 border-red-600 px-4 py-2 font-bold text-red-600">
                              PENDING
                            </span>
                          </div>
                        )}

                        {item.status == "pending" && (
                          <>
                            <img
                              src={item?.imageUrl}
                              alt="Harry Potter"
                              className="h-40 w-28 rounded-md object-cover"
                            />

                            <button
                              className="w-28 rounded-md bg-red-500 px-3 py-2 font-semibold text-white hover:bg-red-700 hover:cursor-pointer"
                              onClick={() => {
                                handleDeleteBook(item._id);
                              }}
                            >
                              REMOVE
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="flex items-center flex-col">
                  <h2 className="text-center text-2xl text-red-600">
                    NO BOOKS AVAILABLE!!
                  </h2>
                  <img
                    src="https://i.pinimg.com/originals/5b/f0/a3/5bf0a3e0601d35349c5451fa52138ea6.gif"
                    className="w-80"
                    alt="no book"
                  />
                </div>
              )}
            </div>
          )}

          {/* PURCHASE HISTORY */}
          {purchaseStatus && (
            <div className="p-2">
              {PurchaseList.length > 0 ? (
                <div>
                  {PurchaseList.map((book) => (
                    <div className="flex flex-col gap-6 border p-4 md:flex-row md:items-center md:justify-between">
                      {/* Book Details */}
                      <div className="md:flex-1">
                        <h1 className="text-xl font-bold">{book.title}</h1>

                        <h4 className="font-bold text-green-600">
                          {book.price}
                        </h4>

                        <p className="mt-2 text-justify">{book.abstract}</p>

                        {/* Status */}
                        <div className="mt-3 flex items-center gap-4">
                          <span className="rounded-md border-2 border-green-600 px-4 py-2 font-bold text-green-600">
                            PURCHASED
                          </span>
                        </div>
                      </div>

                      {/* Book Image */}
                      <div className="flex w-full flex-col items-center gap-3 md:w-32">
                        <img
                          src={book.imageUrl}
                          alt="book img"
                          className="h-40 w-28 rounded-md object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <div className="flex items-center flex-col">
                    <h2 className="text-center text-2xl text-red-600">
                      NO BOOKS AVAILABLE!!
                    </h2>
                    <img
                      src="https://i.pinimg.com/originals/5b/f0/a3/5bf0a3e0601d35349c5451fa52138ea6.gif"
                      className="w-80"
                      alt="no book"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <ToastContainer position="top-center" />

      <Footer />
    </div>
  );
}

export default Profile;
