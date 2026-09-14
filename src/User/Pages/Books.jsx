import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { GiHamburgerMenu } from "react-icons/gi";

function Books() {
  return (
    <>
      <Header />
      {/* Book List */}
      <div className="w-full py-30 px-10">
        <h1 className="text-center text-3xl mb-4">Collections</h1>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Enter Title To Search"
            className="border-[50%] p-2"
          />
        </div>
        <div className="grid gap-1 sm:grid-cols-1 md:grid-cols-12">
          <div className="col-span-2">
            <div className="flex justify-between">
              <h1 className="text-xl">Filters</h1>
              <GiHamburgerMenu className="text-xl" />
            </div>
            <div className="my-3">
              <label>
                <input type="radio" name="" id="" /> No-Filter
              </label>
            </div>
          </div>
          <div className="py-5 col-span-10">
            <div className="w-full flex flex-wrap justify-around">
              {/* Card */}
              <div className="[16rem] shadow-2xl">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwpieFOvJbLyFpC2K8xr-pfIoUfpE83djl2BCuHUIw68Pa1yLJ0Kd494&s=10"
                  alt="coverpage"
                  className="h-75 w-full"
                />
                <h1 className="my-1 text-center">The Avengers</h1>
                <h4 className="text-blue-500 text-center">20$</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Books;
