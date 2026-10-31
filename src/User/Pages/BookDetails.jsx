import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import { bookPaymentApi, getBookByIdApi } from "../../services/allApi";
import { FaEye } from "react-icons/fa";
import Modal from "../Components/Modal";
import { loadStripe } from "@stripe/stripe-js";
import { toast,ToastContainer } from "react-toastify";

function BookDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const [book, setBook] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    handleGetBook();
  }, []);

  const { bid } = useParams();

  const handleGetBook = async () => {
    const response = await getBookByIdApi(bid);
    console.log(response);
    if (response.status === 200) {
      setBook(response.data);
    }
  };
  const handlePurchase = async (book) => {
    console.log(book);
    // const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PK);
    // console.log(stripe);

    const response = await bookPaymentApi(book._id);
    console.log(response);
    if(response.status===200){
      const checkoutURL=response.data?.url
      window.location.href=checkoutURL
    }
    else{
      toast.warning("Something Went Wrong!!")
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-full min-h-[70vh]">
        <div className="md:grid grid-cols-5">
          <div className="p-3 col-span-1 flex justify-center items-center">
            <img src={book?.imageUrl} alt="bookimage" />
          </div>
          <div className="col-span-4 p-2">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold">{book?.title}</h1>
              <button
                className="text-2xl text-blue-600"
                onClick={() => setIsOpen(true)}
              >
                <FaEye />
              </button>
            </div>
            <div className="flex justify-between my-2">
              <h3 className="font-bold">{book?.author}</h3>
              <h3>
                Language:{" "}
                <span className="font-semibold">{book?.language}</span>
              </h3>
              <h3>
                Category:{" "}
                <span className="font-semibold">{book?.category}</span>
              </h3>
            </div>
            <div className="flex gap-3">
              <span className="line-through">Rs.{book?.price}</span>
              <span className="text-green-400 text-2xl">
                Rs.{book?.discountPrice}
              </span>
            </div>
            <div className="my-2 flex justify-between">
              <h1>
                Publisher :{" "}
                <span className="font-semibold">{book?.Publisher}</span>
              </h1>
              <h1>
                Number Of Pages :{" "}
                <span className="font-semibold">{book?.noOfPages}</span>
              </h1>
              <h1>
                ISBN : <span className="font-semibold">{book?.isbn}</span>
              </h1>
            </div>
            <div className="my-2 py-2 text-justify">{book?.abstract}</div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 p-3 rounded-2xl"
                onClick={() => {
                  handlePurchase(book);
                }}
              >
                Buy Now{" "}
                <span className="text-yellow-400">
                  Rs.{book?.discountPrice}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          images={book?.uploadedImages}
        />
        <ToastContainer position="top-center" />
      </div>
      
      <Footer />
    </>
  );
}

export default BookDetails;
