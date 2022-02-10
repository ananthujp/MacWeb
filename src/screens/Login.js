import React from "react";
import bg from "../Images/bg-day.webp";
import { XCircleIcon, ArrowCircleRightIcon } from "@heroicons/react/outline";
function Login() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col items-center ">
        <div className="h-32 w-32 my-2 rounded-full shadow-lg bg-white"></div>
        <div className="flex flex-col items-center">
          <h1 className="text-white mt-4 text-lg font-comp  ">Ananthu JP</h1>
          <div className="flex flex-row backdrop-blur-xl items-center text-white bg-white/30  shadow-lg rounded-full">
            <input
              type="password"
              placeholder="Enter Password"
              className=" my-1 w-32 text-sm bg-transparent font-pro outline-none px-3"
            />
            <span className="w-7 h-7 hidden text-white">
              <ArrowCircleRightIcon />
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 flex flex-col items-center text-white text-xs">
        <div className="backdrop-blur-xl p-1 my-2 text-white bg-white/30 rounded-full w-8 h-8">
          <XCircleIcon />
        </div>
        Cancel
      </div>
    </div>
  );
}

export default Login;
