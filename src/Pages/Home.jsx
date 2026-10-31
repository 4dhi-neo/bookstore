import React, { useState, useEffect, useContext, use } from "react";
import Preloader from "../Components/Preloader";
import Header from "../User/Components/Header";
import Footer from "../User/Components/Footer";
import { IoSearch } from "react-icons/io5";
import { latestBookApi } from "../services/allApi";
import axiosInstance from "../../api/axiosInstance";
import { searchContext } from "../contextAPI/SharedContext";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";

function Home() {
  const [loadStatus, setLoadStatus] = useState(true);
  const [latest, setLatest] = useState([]);
  const { search, setSearch } = useContext(searchContext);
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoadStatus(false);
    }, 1000);
    handleLatestBooks();
  }, []);

  const handleSearchNavigate = () => {
    if (sessionStorage.getItem("token")) {
      if (search != "") {
        nav("/books");
      } else {
        toast.warning("Enter Valid Search key!!");
      }
    } else {
      toast.info("please Login First!!");
      nav("/auth");
    }
  };

  const handleLatestBooks = async () => {
    const response = await latestBookApi();
    console.log(response);
    if (response.status === 200) {
      setLatest(response.data);
    }
  };

  return (
    <>
      {loadStatus ? (
        <Preloader />
      ) : (
        <>
          <Header />

          <div>
            {/* Hero Section */}

            <section className="w-full">
              <div
                className="h-[80vh] bg-cover bg-center bg-no-repeat bg-fixed bg-center"
                style={{
                  backgroundImage:
                    "url('https://galsimahavidyalaya.ac.in/wp-content/uploads/2024/05/download.jpg')",
                }}
              >
                <div className="h-full w-full bg-[rgba(0,0,0,0.3)] flex flex-col items-center justify-center text-white">
                  <h1 className="text-5xl font-bold mb-4">Wonderful Gifts</h1>

                  <h4 className="text-3xl mb-8">
                    Give your Family and Friends a book
                  </h4>

                  <div className="relative w-[400px]">
                    <input
                      type="search"
                      onChange={(e)=>{setSearch(e.target.value)}}
                      placeholder="Search Books"
                      className="w-full bg-white text-gray-600 rounded-full px-5 py-3 pr-12 outline-none"
                    />

                    <IoSearch onClick={handleSearchNavigate} className="text-black absolute top-1/2 right-4 -translate-y-1/2 text-xl" />
                  </div>
                </div>
              </div>
            </section>

            {/* New Arrival */}
            <section className="w-full my-3">
              <h1 className="text-3xl text-center my-3">New Arrival</h1>
              <h1 className="text-5xl text-center my-3">
                Explore our Latest Collection
              </h1>

              {/* Card */}
              {latest.length > 0 ? (
                <div className="flex flex-wrap justify-around my-3">
                  {latest.map((item) => (
                    <div className="[16rem] shadow-2xl">
                      <img
                        src={item?.imageUrl}
                        alt="coverpage"
                        className="h-75 w-full"
                      />
                      <h1 className="my-1 text-center">{item?.title}</h1>
                      <h4 className="text-blue-500 text-center">
                        {item?.price}$
                      </h4>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-red">
                  <h3>No latest Book Available</h3>
                </div>
              )}

              <div className="text-center">
                <button className="bg-blue-800 text-white px-2 py-2">
                  Explore more..
                </button>
              </div>
            </section>
            {/* Author */}
            <section className="w-full mt-7 mb-3">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 ">
                <div className="px-3 ">
                  <h1 className="text-center text-xl">FEATURED AUTHORS</h1>
                  <h1 className="text-center text-2xl">
                    CAPTIVE WITH EVERY WORDS
                  </h1>
                  <p className="text-justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum non ducimus ipsam soluta ab eos ipsum omnis
                    itaque at quas dolorem, mollitia quis quos! Ex provident
                    nemo molestias aliquid dolores! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Vero doloremque sapiente omnis
                    tempora molestiae ab perspiciatis consequuntur eum!
                    Accusamus eos perspiciatis dolorem sint totam consequatur
                    dignissimos ea ipsam architecto officiis.
                  </p>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore libero minima molestias perspiciatis quo similique
                    officia, neque consectetur iste sunt facilis omnis,
                    blanditiis vel aut saepe enim? Neque, nostrum perspiciatis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, quidem porro cum praesentium aut atque voluptatum
                    eligendi, dicta, id temporibus quo. Id repudiandae libero,
                    repellat velit provident ad reprehenderit saepe? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Nostrum soluta
                    explicabo molestiae ea fuga omnis cupiditate tempora
                    possimus deleniti, id eligendi nihil eaque doloremque sunt
                    modi consequuntur sequi voluptate cum!
                  </p>
                </div>
                <div className="px-3 flex items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/imagehttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6dhGffTP5BA42wsWBWvVNywshvZnMctyeqvHdiN58wSQ7vnP8TgWDme7&s=10s?q=tbn:ANd9GcRZZjU204H9fp7AUMY_VCPr3RyUq-wWBSxArj1vB4TOZw&s=10"
                    alt="author"
                    className="w-full"
                  />
                </div>
              </div>
            </section>
            {/* testimonials */}
            <section className="w-full px-5 my-4">
              <h1 className="text-center text-xl">TESTIMONIALS</h1>
              <h1 className="text-center my-2 text-3xl">
                SEE WHAT OTHER PEOPLE ARE SAYING
              </h1>
              <div className="flex flex-col items-center mb-3">
                <img
                  src="https://earthloreacademy.com/wp-content/uploads/2025/06/449.jpg"
                  alt=""
                  className="w-75 h-75 rounded-full"
                />
                <h1 className="text-xl">John Doe</h1>
              </div>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores possimus inventore magni. Libero, eum officia. Nisi
                quidem autem repellendus sint ipsum. Reprehenderit, iusto labore
                corporis maiores necessitatibus quia id libero. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Magnam, saepe unde
                ad in corporis laboriosam itaque, adipisci facilis debitis autem
                alias ex vitae eius provident, consequuntur molestias deserunt
                odio eaque Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Rerum totam, nisi pariatur error qui maiores nulla modi
                ab, numquam consequatur natus consequuntur harum nostrum
                excepturi reprehenderit sed hic neque magni.
              </p>
            </section>
          </div>
              <ToastContainer position="top-center"/>
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
