import React, { useState } from "react";
import bg from "../Images/bg-day.webp";
import Spinner from "../components/Spinner";
import { XCircleIcon, ArrowCircleRightIcon } from "@heroicons/react/outline";
function Login({ state }) {
  const [pass, setPass] = useState(null);
  const [load, setLoad] = useState(false);
  const handleLogin = () => {
    setLoad(true);
    setTimeout(
      () => state("system"),
      Math.floor(Math.random() * (3000 - 1000 + 1) + 3000)
    );
  };
  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col items-center ">
        <div className="h-32 w-32 my-2 rounded-full shadow-lg bg-white overflow-hidden">
          <img
            src="https://avatars.dicebear.com/api/avataaars/:seed.svg?background=%23bfe6eb"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-white mt-4 text-lg font-comp  ">Ananthu JP</h1>
          {load ? (
            <div className="w-8 h-8 mt-4">
              <Spinner col="bg-white/80" />
            </div>
          ) : (
            <div className="flex flex-row mt-4 w-40 backdrop-blur-xl items-center text-white bg-white/30  shadow-lg rounded-full">
              <input
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                type="password"
                placeholder="Enter Password"
                className=" my-1 w-32 text-sm bg-transparent font-pro outline-none px-3 placeholder:text-white/60"
                onChange={(e) => setPass(e.target.value)}
              />
              <span
                onClick={() => handleLogin()}
                className={
                  "w-7 h-7 ml-1 text-white" + (pass ? " flex" : " hidden")
                }
              >
                <ArrowCircleRightIcon className="text-white/70 hover:text-white/80 active:text-white/40" />
              </span>
            </div>
          )}
        </div>
      </div>
      <div
        onClick={() => state("boot")}
        className="absolute cursor-default bottom-6 flex flex-col items-center text-white text-xs"
      >
        <div className="backdrop-blur-xl p-1 my-2 text-white bg-white/30 rounded-full w-8 h-8">
          <XCircleIcon />
        </div>
        Cancel
      </div>
    </div>
  );
}

export default Login;
