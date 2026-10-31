import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { addBookApi,generateBookDetailsAIApi } from "../../services/allApi";
import { ToastContainer,toast } from "react-toastify";
import useDebounce from "../../Hooks/useDebounce";

function SelBook() {


  const [book, setBook] = useState({
    title: "",
    author: "",
    noOfPages: "",
    imageUrl: "",
    price: "",
    discountPrice: "",
    abstract: "",
    publisher: "",
    language: "",
    isbn: "",
    category: "",
    uploadedImages: [],
  });

  const [preview, setPreview] = useState("");
  const [previewList, setPreviewList] = useState([]);
  const debouncedTitleSearch=useDebounce(book.title,1000)


  

  const handleFileUpload = (e) => {
    const fileBlob = e.target.files[0];
    const uploadedFiles = book.uploadedImages;
    uploadedFiles.push(fileBlob);
    setBook({ ...book, uploadedImages: uploadedFiles });
    setPreview(URL.createObjectURL(fileBlob));
    const demoPreviewList = previewList;
    demoPreviewList.push(URL.createObjectURL(fileBlob));
    setPreviewList(demoPreviewList);
    console.log(previewList);
  };
  const handleSubmit = async () => {
    console.log(book);
    const {
      title,
      author,
      noOfPages,
      imageUrl,
      price,
      discountPrice,
      abstract,
      publisher,
      language,
      isbn,
      category,
      uploadedImages,
    } = book;
    if (
      !title ||
      !author ||
      !noOfPages ||
      !imageUrl ||
      !price ||
      !discountPrice ||
      !abstract ||
      !publisher ||
      !language ||
      !isbn ||
      !category ||
      uploadedImages.length == 0
    ) {
      toast.warning("Enter Valid Inputs!!");
    } else {
      console.log("API CALL");
      const formData = new FormData();
      for (let key in book) {
        if (key != "uploadedImages") {
          formData.append(key, book[key]);
        } else {
          book.uploadedImages.forEach((img) => {
            formData.append("uploadedImages", img);
          });
        }
      }
      const response = await addBookApi(formData);
      if (response.status === 201) {
        toast.success("Book Added Successfully!!");
        setBook({
          title: "",
          author: "",
          noOfPages: "",
          imageUrl: "",
          price: "",
          discountPrice: "",
          abstract: "",
          publisher: "",
          language: "",
          isbn: "",
          category: "",
          uploadedImages: [],
        });
        setPreview("");
        setPreviewList([]);
      } else {
        toast.error("Something Went Wrong ");
        console.log(response);
      }
    }
  };

  useEffect(()=>{
    if(debouncedTitleSearch){
      console.log(debouncedTitleSearch)
      console.log("API Called!")
      generateAbstractusingAi()
    }
  },[debouncedTitleSearch])

  const generateAbstractusingAi=async()=>{
    const response=await generateBookDetailsAIApi({title:debouncedTitleSearch})
    if(response.status===200){
      setBook({...book,abstract:response.data.reply})
    }

  }

  return (
    <>
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
              value={book.title}
              onChange={(e) => {
                setBook({ ...book, title: e.target.value });
              }}
              className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
            />

            <input
              type="text"
              placeholder="Author"
              value={book.author}
              onChange={(e) => {
                setBook({ ...book, author: e.target.value });
              }}
              className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
            />

            <input
              type="text"
              placeholder="No. of pages"
              value={book.noOfPages}
              onChange={(e) => {
                setBook({ ...book, noOfPages: e.target.value });
              }}
              className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
            />

            <input
              type="text"
              placeholder="Image URL"
              value={book.imageUrl}
              onChange={(e) => {
                setBook({ ...book, imageUrl: e.target.value });
              }}
              className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
            />

            <input
              type="text"
              placeholder="Price"
              value={book.price}
              onChange={(e) => {
                setBook({ ...book, price: e.target.value });
              }}
              className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
            />

            <input
              type="text"
              placeholder="Discount Price"
              value={book.discountPrice}
              onChange={(e) => {
                setBook({ ...book, discountPrice: e.target.value });
              }}
              className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
            />

            <textarea
              placeholder="Abstract"
              value={book.abstract}
              onChange={(e) => {
                setBook({ ...book, abstract: e.target.value });
              }}
              rows="8"
              className="mb-3 w-full resize-none rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
            />
          </div>

          {/* Right Side */}
          <div>
            <input
              type="text"
              placeholder="Publisher"
              value={book.publisher}
              onChange={(e) => {
                setBook({ ...book, publisher: e.target.value });
              }}
              className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
            />

            <input
              type="text"
              placeholder="Language"
              value={book.language}
              onChange={(e) => {
                setBook({ ...book, language: e.target.value });
              }}
              className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
            />

            <input
              type="text"
              placeholder="ISBN"
              value={book.isbn}
              onChange={(e) => {
                setBook({ ...book, isbn: e.target.value });
              }}
              className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
            />

            <input
              type="text"
              placeholder="Category"
              value={book.category}
              onChange={(e) => {
                setBook({ ...book, category: e.target.value });
              }}
              className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
            />

            {/* Book Image */}
            <label
              htmlFor="bookimgfile"
              className="mb-4 flex h-40 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-400 bg-gray-200 transition hover:border-amber-500 hover:bg-amber-50"
            >
              {!preview && (
                <input
                  type="file"
                  onChange={(e) => handleFileUpload(e)}
                  className="hidden"
                  id="bookimgfile"
                />
              )}

              <img
                src={
                  preview
                    ? preview
                    : "https://cdn-icons-png.flaticon.com/512/126/126477.png"
                }
                alt="Upload book"
                className="h-16 w-16 object-contain opacity-70"
              />
            </label>
            <div className="p-2">
              {preview && (
                <div className="flex justify-around items-center">
                  {previewList.map((item) => (
                    <img src={item} className="h-[100px]" alt="preview" />
                  ))}
                  {previewList.length < 3 && (
                    <label htmlFor="previewinp">
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          handleFileUpload(e);
                        }}
                        id="previewinp"
                      />
                      <FaPlus className="text-xl" />
                    </label>
                  )}
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-between gap-4">
              <button
                type="button"
                className="w-full rounded-md bg-red-800 px-4 py-3 font-semibold text-white transition hover:bg-red-900"
              >
                RESET
              </button>

              <button
                onClick={handleSubmit}
                type="button"
                className="w-full rounded-md bg-green-800 px-4 py-3 font-semibold text-white transition hover:bg-green-900"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <ToastContainer position="top-center"/>
      </div>
    </>
  );
}

export default SelBook;
