import React, { use, useEffect, useState,useContext } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import { bookListApi } from "../../services/allApi";
import { searchContext } from "../../contextAPI/SharedContext";
import { Link } from "react-router-dom";

function Books() {
  const [bookList, setBookList] = useState([]);
  const [filters, setFilters] = useState([]);
  const [dummyList, setDummyList] = useState([]);
  const {search,setSearch}=useContext(searchContext)

  const handleSearch = () => {
    const books = dummyList.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    setBookList(books);
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      handleBookList();
    }
  }, []);
  useEffect(()=>{
    handleSearch(search)
  },[search])

  const handleBookList = async () => {
    const response = await bookListApi();
    console.log(response);

    if (response.status === 200) {
      setBookList(response.data);
      setDummyList(response.data);

      const category_set = response.data.map((item) => item.category);
      setFilters([...new Set(category_set)]);
    }
  };

  const filterBooks = (filter) => {
    console.log(filter);
    if (filter) {
      const filterBooks = dummyList.filter((item) => item?.category == filter);
      setBookList(filterBooks);
    } else {
      setBookList(dummyList);
    }
  };

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
             onChange={(e) => {setSearch(e.target.value)}}
            className="border-[50%] p-2"
          />
        </div>
        <div className="grid gap-1 sm:grid-cols-1 md:grid-cols-12">
          <div className="col-span-2">
            <div className="flex justify-between">
              <h1 className="text-xl">Filters</h1>
              <GiHamburgerMenu className="text-xl" />
            </div>
            <div className="my-3 flex flex-col gap-2">
              <label>
                <input
                  type="radio"
                  onClick={() => {
                    filterBooks("");
                  }}
                  name="filter"
                  id=""
                />{" "}
                No-Filter
              </label>

              {filters.map((item) => (
                <label>
                  <input
                    type="radio"
                    onClick={() => {
                      filterBooks(item);
                    }}
                    name="filter"
                    id=""
                  />{" "}
                  {item}
                </label>
              ))}
            </div>
          </div>
          <div className="py-5 col-span-10">
            {bookList.length > 0 ? (
              <div className="w-full flex flex-wrap justify-around gap-2">
                {bookList.map((item) => (
                  <div className="[16rem] shadow-2xl">
                    <Link to={`/books/${item?._id}`}>
                    <img
                      src={item?.imageUrl}
                      alt="coverpage"
                      className="h-75 w-full"
                    />
                    </Link>
                    <h1 className="my-1 text-center">{item?.title}</h1>
                    <h4 className="text-blue-500 text-center">
                      &#8377;{item?.price}
                    </h4>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center h-['400px]">
                <img
                  src="https://cdn.dribbble.com/userupload/22180708/file/original-fb0f3fcb86aa71d393a578acb476b44c.gif"
                  alt="book-empty"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Books;
