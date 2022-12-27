import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Home from "../Home/Home";
import Login from "../Login/Login";

const SignUp = () => {
  const expression = {
    names: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{6,15}$/, // 6 a 15 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getEmail = localStorage.getItem("email");
  const getPassword = localStorage.getItem("password");

  const onSubmit = (user) => {
    if (
      expression.email.test(user.email) &&
      expression.password.test(user.password) &&
      expression.names.test(user.username)
    ) {
      localStorage.setItem("username", user.username);
      localStorage.setItem("email", user.email);
      localStorage.setItem("password", user.password);
    } else {
      console.log("fallo");
    }
  };


  return (
    <>
      {getEmail && getPassword ? (
        
        <Login/>
    
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inline-block my-20 bg-neutral-900 p-20">
            <div className="flex justify-center gap-10">
             <img className="w-44" src={`imgSign/dd.png`} alt="" /> 
            <img className="w-52" src={`imgSign/str.png`} alt="" />
            </div>
            <h1 className="text-yellow-300 text-2xl mt-10">Create Your Account</h1>
            <div className="m-8">
             
              <input
                className="input input-bordered input-error w-full rounded-sm p-2 font-chivo text-xl"
                type="text"
                name="username"
                placeholder="UserName"
                {...register("username", { required: true })}
                
              />
              {errors.username && <span className=" text-red-500">This field is required</span>}
            </div>
            <div className="m-8">
              
              <input
                className="input input-bordered input-error w-full rounded-sm p-2 font-chivo text-xl"
                type="text"
                name="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && <span className=" text-red-500">This field is required</span>}
            </div>
            <div className="m-8">
              
              <input
                className="input input-bordered input-error w-full rounded-sm p-2 font-chivo text-xl"
                type="password"
                name="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && <span className=" text-red-500">This field is required</span>}
            </div>
            <button className="text-white p-4 bg-neutral-800 font-semibold w-full">Create Account</button>
          </div>
        </form>
      )}
    </>
  );
};

export default SignUp;
