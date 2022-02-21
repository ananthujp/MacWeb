import React, { useEffect } from "react";
import bg from "../Images/bg-day.webp";
import { SearchIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import useSlice from "../hooks/appSlice";
import { Icons } from "../Data/appData";
function Launchpad({ hide, openW }) {
  // const { showLaunchpad } = useSlice();
  // useEffect(() => {
  //   document.addEventListener("click", () => showLaunchpad(false));
  // }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: (5, 5) }}
      animate={{
        opacity: 1,
        scale: (1, 1),
        transition: { durations: 1 },
      }}
      onClick={() => hide(false)}
      exit={{ opacity: 0, scale: (5, 5) }}
      className=" h-screen z-50 w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="backdrop-blur-xl
  bg-gray-600/30 w-full h-full flex flex-col items-center "
      >
        <div
          className="flex flex-row px-2 backdrop-blur-sm
          bg-white/30 text-white border border-white/40 rounded-lg text-sm text-center mt-4"
        >
          <SearchIcon className="w-4 mr-1.5" />
          <input
            className="bg-transparent py-0.5 placeholder:text-gray-200 outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex flex-wrap flex-row w-1/2 mt-8">
          {Icons.map((doc, index) => (
            <div
              key={`launchpad.icons.${index}`}
              className="flex flex-col items-center mt-8 active:opacity-30"
            >
              <div
                onClick={() =>
                  openW([
                    { name: doc.name, window: doc.window, status: "open" },
                  ])
                }
                className="w-24 mx-6"
              >
                {doc.icon}
              </div>
              <h1 className="text-white/80 text-xs">{doc.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Launchpad;
