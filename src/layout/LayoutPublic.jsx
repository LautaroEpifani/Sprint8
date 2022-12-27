import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer"
import { RouterProvider } from "react-router";

const LayoutPublic = () => {
  const logEmail = localStorage.getItem("logEmail");
  const logPassword = localStorage.getItem("logPassword");
  const user = localStorage.getItem("username")

  const handleClick = () => {
    localStorage.removeItem("logEmail");
    localStorage.removeItem("logPassword");
    window.location.reload();
  };

  return (
    
    <>
      <div className=" text-center mx-auto bg-black min-h-screen ">
        <div className="flex text-gray-400 justify-between ">
          <div>
            <ul className="flex justify-between lg:w-40 mt-10 lg:ml-40 px-4 lg:px-0 gap-2">
              <li>
                <img className="w-6 md:w-8" src={`imgLan/face.png`} alt=""  />
              </li>
              <li>
                <img className="w-6 md:w-8" src={`imgLan/ins.png`} alt="" />
              </li>
              <li>
                <img  className="w-6 md:w-8" src={`imgLan/yt.png`} alt=""  />
              </li>
              <li>
                <img  className="w-6 md:w-8" src={`imgLan/tw.png`} alt=""  />
              </li>
            </ul>
          </div>

          <div className="w-44 lg:w-72 mb-10 ">
            <img className="" src={`imgLan/log.png`} alt=""/>
          </div>
          <div>
            {logEmail && logPassword ? (
              <div className="flex lg:w-40 justify-center mt-10 lg:mr-40 p-4 text-xl">
                <div className="flex  md:mx-6 md:gap-2">
                  <img src={`imgLan/user.png`} alt="" />
                  <p>{user}</p>
                </div>
                <p className="mx-2 md:mx-6"> / </p>
                <button className=" " onClick={handleClick}>
                   LogOut
                </button>
              </div>
            ) : (
              <div className="flex lg:w-40 justify-center mt-10 gap-4 lg:mr-40 px-4 lg:px-0">
                <Link to="/login">
                  <h3>LOG IN</h3>
                </Link>
                <p>/</p>
                <Link to="/signup">
                  <h3>SIGN UP</h3>
                </Link>
              </div>
            )}
          </div>
        </div>
        
       
        <NavBar/>
        <Outlet />
        <Footer/>
      </div>
    </>
  );
};

export default LayoutPublic;
