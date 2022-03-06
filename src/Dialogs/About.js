import React, { useState } from "react";
import { ChatIcon } from "@heroicons/react/outline";
import { ButtonClass, TabButton, Window } from "../Colors/Window";
const Overview = () => {
  return (
    <>
      <div className="flex flex-row w-full justify-around items-center">
        <div>
          <img
            className="w-48"
            alt=""
            src="https://cdn.jim-nielsen.com/macos/512/macos-monterey-2021-11-15.png"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl">macOS Monterey</h1>
          <h1 className="text-xs">Version 12.0.1</h1>
          <h1 className="text-xsm mt-4">MacBook Pro</h1>
          <h1 className="text-xsm mt-1">Developer</h1>
          <h1 className="text-xsm mt-1">Technical Details</h1>
          <h1 className="text-xsm mt-1">Startup Details</h1>
          <h1 className="text-xsm mt-1 mb-4">Serial Number</h1>
          <div className="flex flex-row">
            <div
              className={
                "cursor-default py-0.5 px-1.5 shadow-md text-xxs rounded-md " +
                ButtonClass
              }
            >
              Contact Me
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-9 text-black/60 text-xxs text-center">
        All Right Reserved. Licence Agreement.
      </h1>
    </>
  );
};
const AboutScreen = () => {
  return (
    <>
      <div className="flex flex-row w-full justify-around items-center">
        <div className="rounded-2xl shadow-md bg-gradient-to-b from-white to-gray-200 py-1 px-3 w-24">
          <img
            className="filter"
            src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
            alt=""
          />
        </div>
        <div className="rounded-2xl shadow-md bg-gradient-to-b from-white to-gray-200 py-2 px-2.5 w-24">
          <img
            className="filter "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
const DeveloperScreen = () => {
  return (
    <>
      <div className="flex flex-row w-full justify-start items-start">
        <div className="flex w-24 h-24 shadow-slate-400 shadow-md rounded-xl overflow-hidden">
          <img
            className=" scale-105"
            src="https://avatars.githubusercontent.com/u/31985570?v=4"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start justify-center ml-12  w-72">
          <h1 className="font text-3xl">Ananthu JP</h1>
          <h1 className=" font-light text-xs mt-2 mb-2">
            Hi, Some lorem ipsum. Then some more lorem ipsum
          </h1>
          <h1 className=" font-light text-xs mt-2 mb-2 text-justify">
            That's cool! so, some more lorem ipsum. A lot of lorem ipsum. I hope
            you are not bored. It means you need some loremipsum, right? So,
            What are you waiting for? Go and get some lorem ipsum man!
          </h1>
        </div>
      </div>
    </>
  );
};
const ContactScreen = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-around items-center -mt-4">
        <div className="flex rounded-2xl text-gray-600 shadow-md bg-gradient-to-b justify-center from-white to-gray-200 py-3.5 px-2 w-24">
          <ChatIcon className="w-12 h-12" />
        </div>
        <h1 className="text-3xl mt-4 font-bold">Write to Developer</h1>
        <h1 className="text-xs mt-1 ">Type your message here</h1>
        <div className="flex flex-row mt-4 outline w-80 items-center outline-1 rounded-sm outline-offset-4 outline-gray-300">
          <h1 className="text-sm whitespace-nowrap">Email ID</h1>
          <input
            placeholder="example@icloud.com"
            type="text"
            className="ml-2 text-sm w-full outline-none bg-transparent placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-row mt-4 outline w-80 items-start outline-1 rounded-sm outline-offset-4 outline-gray-300">
          <h1 className="text-sm">Message</h1>
          <textarea
            placeholder="Your Message here"
            type="text"
            className="ml-2 w-full text-sm outline-none bg-transparent placeholder:text-gray-400"
          />
        </div>
        <button className="mt-6 text-xs bg-slate-600 active:bg-slate-400 px-8 py-0.5 rounded-md text-white">
          Send
        </button>
      </div>
    </>
  );
};
function About() {
  const [tab, setTab] = useState("Overview");
  const Tabs = [
    { txt: "Overview", screen: <Overview /> },
    { txt: "About", screen: <AboutScreen /> },
    { txt: "Developer", screen: <DeveloperScreen /> },
    { txt: "Contact", screen: <ContactScreen /> },
  ];

  return (
    <div className="flex flex-row w-full h-full">
      <div className={"flex flex-col w-full h-full bg-gray-50"}>
        <div
          className={
            "windowHandle cursor-default flex flex-row justify-center items-center pl-4 text-sm font-bold h-12 min-h-[40px] border-b" +
            Window.TitleBar
          }
        >
          <div className="border rounded-md border-gray-500/20 flex flex-row font-normal text-xs">
            {Tabs.map((dc, i) => (
              <div
                onClick={() => setTab(dc.txt)}
                className={
                  "px-2 py-1  " +
                  TabButton[0] +
                  (i !== 0 ? " border-l " + TabButton[2] : " ") +
                  (dc.txt === tab ? TabButton[1] : " ")
                }
              >
                {dc.txt}
              </div>
            ))}
          </div>
        </div>
        <div className={"px-16 py-8 h-full" + Window.Bg}>
          {Tabs.map((dc, i) => tab === dc.txt && dc.screen)}
        </div>
      </div>
    </div>
  );
}

export default About;
