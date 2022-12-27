import React, { useState } from "react";
import { BrowserRouter, Link, NavLink, Router } from "react-router-dom";

const NavBar = () => {
  let [open, setOpen] = useState(false);

  return (
    
    <nav className="text-left px-6 lg:p-0">
    
      <div className="xl:hidden ">
        <button aria-label='menu' onClick={() => setOpen(!open)} className="">
          {open ? (
            <img src={`imgLan/close.png`} alt=""></img>
          ) : (
            <img src={`imgLan/menu.png`} alt=""></img>
          )}
          </button>
      </div>
      <div
        className={`${
          open
            ? "block xl:flex  lg:mx-auto w-20 lg:w-full lg:justify-center text-gray-400  text-xl  lg:gap-y-0 lg:gap-x-20 "
            : "hidden xl:flex  lg:mx-auto lg:w-full lg:justify-center text-gray-400  text-xl  lg:gap-y-0 lg:gap-x-20 "
        }`}
      >
       
        <Link to="/">
          <button className="mb-4">HOME</button>
        </Link>

        <Link to="/starships">
          <button className="mb-4">STARSHIPS</button>
        </Link>

        <Link to="/">
          <button className="mb-4">VIDEO</button>
        </Link>
        <Link to="/">
          <button className="mb-4">FILMS</button>
        </Link>
        <Link to="/">
          <button className="mb-4">SERIES</button>
        </Link>
        <Link to="/">
          <button className="mb-4">INTERACTIVE</button>
        </Link>
        <Link to="/">
          <button className="mb-4">COMMUNITY</button>
        </Link>
        <Link to="/">
          <button className="">DATABANK</button>
        </Link>
        
      </div>
    
    </nav>
    
  );
};

export default NavBar;
