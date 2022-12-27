import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Home from "../Home/Home";

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  

  const getEmail = localStorage.getItem("email");
  const getPassword = localStorage.getItem("password");

  const logEmail = localStorage.getItem("logEmail");
  const logPassword = localStorage.getItem("logPassword");

   const handleClickLogin = () => {
    window.location.reload();
  };


  const onSubmit = (user) => {

  
    if (user.email === getEmail && user.password === getPassword) {
         localStorage.setItem("logEmail", user.email)
        localStorage.setItem("logPassword", user.password)
        handleClickLogin()
    } else {
      alert("Email o contraseña no existe")
    }

    
  };

  return (
    <>
      {logEmail && logPassword? <Home/> 
    : 
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inline-block my-20 bg-neutral-900 p-20">
          <div className="flex justify-center gap-10">
             <img className="w-44" src={`imgSign/dd.png`} alt="" /> 
            <img className="w-52" src={`imgSign/str.png`} alt="" />
            </div>
            <h1 className="text-yellow-300 text-2xl mt-10">ENTER EMAIL AND PASSWORD</h1>
          <div className="m-8">
           
            <input
              className="input input-bordered input-error w-full rounded-sm p-2 font-chivo text-xl"
              placeholder="Email"
              type="text"
              name="email"
              {...register("email", { required: true })}
            />
            {errors.email && <span className=" text-red-500">This field is required</span>}
          </div>
          <div className="m-8">
           
            <input
              className="input input-bordered input-error w-full rounded-sm p-2 font-chivo text-xl"
              placeholder="Password"
              type="password"
              name="password"
              {...register("password", { required: true })}
            />
            {errors.email && <span className=" text-red-500">This field is required</span>}
          </div>
          <button className="text-white p-4 bg-neutral-800 w-full font-semibold">Sign In</button>
        </div>
      </form>

       } 
    </>
  );
};

export default Login;
