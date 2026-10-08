import React, { useState,useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaRegEdit } from "react-icons/fa";
import ProfileUpdate from "../Components/ProfileUpdate";
import axiosInstance from "../../../api/axiosInstance";

function Profile() {
  const [sidebar, setSidebar] = useState(false);

  const [sellStatus, setSellStatus] = useState(true);
  const [bookStatus, setBookStatus] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState(false);

  const trueClass = "p-3 border-t-2 border-s-2 border-e-2";
  const falseClass = "p-3 border-b-2";

  const [username,setUserName]=useState("")
  const [dp,setDp]=useState("")
  const [bio,setBio]=useState("")

  

  useEffect(()=>{
    if(sessionStorage.getItem('token')&&sessionStorage.getItem('user')){
      const user=JSON.parse(sessionStorage.getItem('user'))
      setDp(user?.picture)
      setUserName(user?.username)
      setBio(user?.bio)
    }
  },[])

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
              src={dp?`${axiosInstance.defaults.baseURL}/uploads/${dp}`:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
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
              <p className="text-justify">
               {bio}
              </p>
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
          {sellStatus && (
            <div className="rounded-2xl border border-gray-200 bg-gray-100 p-5">
              <h1 className="mb-5 pt-2 text-center text-2xl font-bold text-green-950">
                Book Details
              </h1>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Left Side */}
                <div>
                  <input
                    type="text"
                    placeholder="Title"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  <input
                    type="text"
                    placeholder="Author"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  <input
                    type="text"
                    placeholder="No. of pages"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  <input
                    type="text"
                    placeholder="Image URL"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  <input
                    type="text"
                    placeholder="Price"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  <input
                    type="text"
                    placeholder="Discount Price"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  <textarea
                    placeholder="Abstract"
                    rows="8"
                    className="mb-3 w-full resize-none rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />
                </div>

                {/* Right Side */}
                <div>
                  <input
                    type="text"
                    placeholder="Publisher"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  <input
                    type="text"
                    placeholder="Language"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  <input
                    type="text"
                    placeholder="ISBN"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  <input
                    type="text"
                    placeholder="Category"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  {/* Book Image */}
                  <label
                    htmlFor="bookimgfile"
                    className="mb-4 flex h-40 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-400 bg-gray-200 transition hover:border-amber-500 hover:bg-amber-50"
                  >
                    <input type="file" className="hidden" id="bookimgfile" />

                    <img
                      src="https://cdn-icons-png.flaticon.com/512/126/126477.png"
                      alt="Upload book"
                      className="h-16 w-16 object-contain opacity-70"
                    />
                  </label>

                  {/* Buttons */}
                  <div className="flex justify-between gap-4">
                    <button
                      type="button"
                      className="w-full rounded-md bg-red-800 px-4 py-3 font-semibold text-white transition hover:bg-red-900"
                    >
                      RESET
                    </button>

                    <button
                      type="button"
                      className="w-full rounded-md bg-green-800 px-4 py-3 font-semibold text-white transition hover:bg-green-900"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* BOOK STATUS */}
          {bookStatus && (
            <div className="p-2">
              <div className="flex flex-col gap-6 border p-4 md:flex-row md:items-center md:justify-between">
                {/* Book Details */}
                <div className="md:flex-1">
                  <h1 className="text-xl font-bold">Harry Potter</h1>

                  <h4 className="font-bold text-green-600">₹500</h4>

                  <p className="mt-2 text-justify">
                    Harry Potter is a young wizard who discovers his magical
                    heritage and begins an exciting journey at Hogwarts School
                    of Witchcraft and Wizardry. Along the way, he makes new
                    friends, faces dangerous challenges, and uncovers secrets
                    about his past. The story is filled with magic, friendship,
                    adventure, and unforgettable moments.
                  </p>

                  {/* Status */}
                  <div className="mt-3 flex items-center gap-4">
                    <span className="rounded-md border-2 border-green-600 px-4 py-2 font-bold text-green-600">
                      APPROVED
                    </span>
                  </div>
                </div>

                {/* Book Image */}
                <div className="flex w-full flex-col items-center gap-3 md:w-32">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWnEsGh24ugP8b2x7KMi2Ral9utATzn3MIjr4QdIGWQ&s=10"
                    alt="Harry Potter"
                    className="h-40 w-28 rounded-md object-cover"
                  />

                  <button className="w-28 rounded-md bg-red-500 px-3 py-2 font-semibold text-white hover:bg-red-700 hover:cursor-pointer">
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PURCHASE HISTORY */}
          {purchaseStatus && (
            <div className="p-2">
              <div className="flex flex-col gap-6 border p-4 md:flex-row md:items-center md:justify-between">
                {/* Book Details */}
                <div className="md:flex-1">
                  <h1 className="text-xl font-bold">Harry Potter</h1>

                  <h4 className="font-bold text-green-600">₹500</h4>

                  <p className="mt-2 text-justify">
                    Harry Potter is a young wizard who discovers his magical
                    heritage and begins an exciting journey at Hogwarts School
                    of Witchcraft and Wizardry. Along the way, he makes new
                    friends, faces dangerous challenges, and uncovers secrets
                    about his past. The story is filled with magic, friendship,
                    adventure, and unforgettable moments.
                  </p>

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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWnEsGh24ugP8b2x7KMi2Ral9utATzn3MIjr4QdIGWQ&s=10"
                    alt="Harry Potter"
                    className="h-40 w-28 rounded-md object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;