import React, { useEffect } from "react";
import bg from "../Images/bg-day.webp";
import { SearchIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import useSlice from "../hooks/appSlice";
const Icons = [
  {
    name: "Finder",
    icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png",
  },
  {
    name: "Siri",
    icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ff3bafbac60495771_siri.png",
  },
  {
    name: "Launchpad",
    icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853943597517f128b9b4_launchpad.png",
  },
  {
    name: "Contacts",
    icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853743597518c528b9b3_contacts.png",
  },
  {
    name: "Notes",
    icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c849ec3735b52cef9_notes.png",
  },
  {
    name: "Reminders",
    icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853d44d99641ce69afeb_reminders.png",
  },
  {
    name: "Photos",
    icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c55558a2e1192ee09_photos.png",
  },
  {
    name: "Facetime",
    icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708537f18e2cb27247c904_facetime.png",
  },
];
function Launchpad({ hide }) {
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
              <img src={doc.icon} alt="" className="w-24 mx-6" />
              <h1 className="text-white/80 text-xs">{doc.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Launchpad;
