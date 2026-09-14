import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
function Contact() {
  return (
    <>
      <Header />
      {/* contact */}
      <div className="w-full">
        <section className="text-center px-20 p-5">
          <h1 className="text-2xl">Contact Us</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            deleniti ut nostrum totam sed, magni iusto dignissimos officia, enim
            quo molestiae voluptatem eos ad quas, ex est aspernatur ullam
            eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat sequi vel sapiente sed culpa nobis porro suscipit fugiat
            rerum eaque eum, perferendis explicabo libero aliquam quas? Eius
            repellat exercitationem dolorum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Commodi possimus, nesciunt itaque et
            exercitationem obcaecati ullam quia aspernatur deleniti blanditiis,
            saepe dolore magni, neque optio nulla ipsam praesentium harum alias.
          </p>
          <div className="flex flex-wrap gap-4 items-center my-5 justify-between">
            <div className="flex items-center text-left gap-3">
              <FaLocationDot className="border-2 border-blue-600 rounded-full text-white bg-blue-600 text-5xl p-2" />
              <span>
                book Store <br />
                abc123 <br />
                london
              </span>
            </div>
            <div className="flex items-center text-left gap-3">
              <FaPhoneAlt className="border-2 border-blue-600 rounded-full text-white bg-blue-600 text-5xl p-2" />
              <span>+43 8933 74773 </span>
            </div>
            <div className="flex items-center text-left gap-3">
              <IoMdMail className="border-2 border-blue-600 rounded-full text-white bg-blue-600 text-5xl p-2" />
              <span>bookStore22@gmail.com</span>
            </div>
          </div>
          {/* form */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-400 w-full p-5">
              <div className="">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="email"
                  className="bg-white p-3 border w-full mb-3"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="phone"
                  className="bg-white p-3 border w-full mb-3"
                />
                <textarea
                  type="text"
                  name=""
                  id=""
                  placeholder="massege"
                  className="bg-white p-3 border w-full mb-3"
                />
                <button className="btn bg-black text-white w-full py-3 flex items-center justify-center gap-3 hover:bg-gray-600">
                  send
                  <span>
                    <IoIosSend />
                  </span>
                </button>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0329002277967!2d75.78116707479785!3d11.258990050107936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65900d568d853%3A0x86dc9f15ee869de3!2sLuminar%20Technolab%20-%20Software%20training%20institute%20in%20Calicut!5e0!3m2!1sen!2sin!4v1788260834105!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: "1" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
