"use client";
import React, { useState } from "react";


const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    // console.log("email is ", email);
    // console.log("password  is ", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-gray-800 dark:bg-gray-800 flex h-screen w-screen items-center justify-center" 
    // style={{
    //   backgroundImage: `url(https://img.freepik.com/free-vector/soft-curve-shapes-background_1017-26675.jpg?t=st=1731777990~exp=1731781590~hmac=c4fd42867266b99da1f011619f4d87e3c34626cbf8354528714bf62d36d675e7&w=996)`,
    //   backgroundSize: 'cover', // Makes the image cover the entire container
    //   backgroundPosition: 'center', // Centers the image
    //   height: '100vh', // Full viewport height
    //   width: '100%', // Full width
    // }}
    
    
    
    >
      <div className="border-2  rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className=" h-screen w-screen flex flex-col items-center justify-center"
        >
          <label
            for="email"
            class="  block absolute top-[25%] left-[36%] text-sm font-medium text-gray-400 dark:text-white"
          >
            Email address
          </label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2 mb-8"
            type="email"
            placeholder="enter your email"
          />
          <label
            for="email"
            class="  block absolute top-[45%] left-[36%] text-sm font-medium text-gray-400 dark:text-white"
          >
            Password
          </label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-8 mb-6"
            type="password"
            placeholder="enter password"
          />
          <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4 ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
