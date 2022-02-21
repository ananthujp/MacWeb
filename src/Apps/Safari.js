import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DuplicateIcon,
  InboxInIcon,
  PlusIcon,
  SearchIcon,
  TemplateIcon,
  DesktopComputerIcon,
  UserGroupIcon,
  BookmarkIcon,
  BookOpenIcon,
} from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { ShieldCheckIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
const sideBarItems = [
  {
    name: "",
    items: [
      {
        name: "Start Page",
        icon: <DesktopComputerIcon className="w-4" />,
      },
    ],
  },
  {
    name: "Received Links",
    items: [
      {
        name: "Shared with You",
        icon: <UserGroupIcon className="w-4" />,
      },
    ],
  },
  {
    name: "Collected Links",
    items: [
      {
        name: "Bookmarks",
        icon: <BookmarkIcon className="w-4" />,
      },
      {
        name: "Reading List",
        icon: <BookOpenIcon className="w-4" />,
      },
    ],
  },
];
function Safari() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="flex flex-row w-full h-full">
      <motion.div
        animate={{
          width: sidebar ? [0, 200] : [200, 0],
          transition: { duration: 1 },
        }}
        className={
          " flex-col bg-white/60 backdrop-blur-xl h-full w-48 max-w-48 " +
          (sidebar ? " flex" : " hidden ")
        }
      >
        {/* Section Left */}
        <div className="windowHandle  cursor-default  flex items-center pl-3 text-sm font-bold text-gray-800 h-12 max-h-12 bg-trasparent">
          {/* Left Title */}
        </div>
        <div className="px-2 overflow-y-auto cursor-default">
          {sideBarItems.map((item) => (
            <div className="flex px-2 flex-col my-2 text-xs font-semibold text-gray-500">
              <h1>{item.name}</h1>
              {item.items.map((dc) => (
                <div className="flex hover:bg-gray-200/30 active:bg-gray-300/30 group mt-2 flex-row justify-between text-md py-1 font-normal pl-2 rounded-md">
                  <div className="flex flex-row">
                    {dc.icon}
                    <div className="flex flex-col ml-2 justify-center w-44">
                      <h1 className="">{dc.name}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
      <div className="windowHandle flex flex-col bg-gray-50 w-full h-full ">
        <div className="px-4 cursor-default flex flex-row justify-between items-center pl-4 text-sm font-bold text-gray-600 h-12 bg-gray-200 border-b border-gray-300">
          <div className={"flex flex-row " + (sidebar ? " " : " ml-14")}>
            <TemplateIcon
              onClick={() => setSidebar(!sidebar)}
              className="w-8 hover:bg-gray-300/60 py-1 px-1.5 rounded-md"
            />
            <ChevronLeftIcon className="w-8 text-gray-400 hover:bg-gray-300/60 py-1 px-1.5 rounded-md" />
            <ChevronRightIcon className="w-8 mr-2  hover:bg-gray-300/60 py-1 px-1.5 rounded-md" />
          </div>
          <div className="flex flex-row">
            <ShieldCheckIcon className="w-5 mr-2" />
            <div className="flex flex-row bg-gray-300 p-1 rounded-lg ">
              <SearchIcon className="w-4 " />
              <input
                type="text"
                placeholder="https://www.google.com/"
                className="outline-none bg-transparent w-64"
              />
            </div>
          </div>
          <div className="flex flex-row">
            <InboxInIcon className="w-8 -rotate-180 mx-1 hover:bg-gray-300/60 active:bg-gray-400/50 p-1.5 rounded-md" />
            <PlusIcon className="w-7 -rotate-180 mx-1 hover:bg-gray-300/60 active:bg-gray-400/50 p-1.5 rounded-md" />
            <DuplicateIcon className="w-8 -rotate-180 mx-1 hover:bg-gray-300/60 active:bg-gray-400/50 p-1.5 rounded-md" />
          </div>
        </div>
        <div className="h-full">
          <iframe
            src={"https://www.google.com/webhp?igu=1"}
            className="w-full h-full"
            frameBorder="0"
            title="Mac Chrome Url"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Safari;
