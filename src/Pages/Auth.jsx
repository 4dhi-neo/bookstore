import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import {
  userRegisterApi,
  userLoginApi,
  googleAuthApi,
} from "../services/allApi";
import { ToastContainer, toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [authStatus, setAuthStatus] = useState(false);
  const nav=useNavigate()

  const formik = useFormik({
    initialValues: {
      username: "Demo",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Must be atleast 3 characters")
        .required("Required"),
      email: Yup.string().email("Invalid Email").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (authStatus) {
        console.log("Registration API");
        handleRegister(values);
      } else {
        console.log("Login API");
        handleLogin(values);
      }
      resetForm();
    },
  });

  const handleRegister = async (data) => {
    const response = await userRegisterApi(data);
    console.log(response);
    if (response.status === 201) {
      toast.success("User regiteration Successful!!... Please Login..!");
      setAuthStatus(false);
    } else {
      toast.error("Something Went Wrong!!");
    }
  };

  const handleLogin = async (data) => {
    const response = await userLoginApi(data);
    console.log(response);
    if (response.status === 200) {
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      toast.success("Login Successfull!!");
      setTimeout(() => {
        
      if (response.data.user.role === "admin") {
        nav("/admin");
      } else {
        nav("/");
      }
        
      }, 2000);

    } else {
      toast.error("Login Failed!!");
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    console.log(credentialResponse);
    const res = jwtDecode(credentialResponse.credential);
    // console.log(res)
    const { email, name, picture } = res;
    const response = await googleAuthApi({ email, name, picture });
    if (response.status === 200) {
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      toast.success("Login Successfull!!");
      setTimeout(() => {
          if (response.data.user.role === "admin") {
        nav("/admin");
      } else {
        nav("/");
      }
        
      }, 2000);
    
    } else {
      toast.error("Something Went Wrong!!");
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWqBwB6nm3ECEXZ4WiI2qdX4ZRPX2BUcE3NSWGk23FQ6rIDi6THweMT5_F&s=10')] bg-no-repeat bg-cover ">
        <div className="h-full flex flex-col items-center justify-center">
          <h1 className="text-center text-5xl font-extrabold text-white my-10">
            BOOK STORE
          </h1>
          <div className="bg-gray-900 text-white p-10 w-[50%]">
            <p className="flex justify-center">
              <FaRegUserCircle className="text-9xl" />
            </p>
            {authStatus ? (
              <h1 className="text-center text-2xl mb-3 font-bold">Register</h1>
            ) : (
              <h1 className="text-center text-2xl mb-3 font-bold">Login</h1>
            )}

            <div className="my-10 border-b-2">
              <form onSubmit={formik.handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="bg-white text-black p-3 w-full rounded-lg my-2"
                />
                <div className="text-red-600">{formik.errors.email}</div>
                {authStatus && (
                  <>
                    <input
                      type="text"
                      placeholder="Username"
                      name="username"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      className="bg-white text-black p-3 w-full rounded-lg my-2"
                    />
                    <div className="text-red-600">{formik.errors.username}</div>
                  </>
                )}

                <input
                  type="password"
                  placeholder="Passsword"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className="bg-white text-black p-3 w-full rounded-lg my-2"
                />
                <div className="text-red-600">{formik.errors.password}</div>
                <div className="flex justify-between mb-3">
                  <p className="text-amber-600">
                    Never share your passwords with others
                  </p>
                  {!authStatus && (
                    <a href="#" className="text-white underline">
                      Forgot Password
                    </a>
                  )}
                </div>
                {authStatus ? (
                  <button
                    type="submit"
                    className="p-3 bg-green-600 w-full rounded-md mb-3"
                  >
                    Register
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="p-3 bg-green-600 w-full rounded-md mb-3"
                  >
                    Login
                  </button>
                )}
              </form>
            </div>

            {/* Google Auth */}
            <div className="flex justify-center my-3">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  handleGoogleLogin(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
            <div className="flex justify-center gap-3">
              {authStatus ? (
                <p>Already a user?</p>
              ) : (
                <p> Are you a new user?</p>
              )}
              {authStatus ? (
                <p
                  className="text-blue-600 underline cursor-pointer"
                  onClick={() => {
                    setAuthStatus(!authStatus);
                  }}
                >
                  Login Here
                </p>
              ) : (
                <p
                  className="text-blue-600 underline cursor-pointer"
                  onClick={() => {
                    setAuthStatus(!authStatus);
                  }}
                >
                  Register Here!
                </p>
              )}
            </div>
          </div>
        </div>
        <ToastContainer position="top-center" autoClose={"3000"} />
      </div>
    </>
  );
}

export default Auth;
