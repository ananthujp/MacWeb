import React from "react";
import {
  ArrowCircleDownIcon,
  AtSymbolIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  CloudIcon,
  DesktopComputerIcon,
  DocumentIcon,
  FolderOpenIcon,
} from "@heroicons/react/outline";
import { Window } from "../Colors/Window";
const sideBarItems = [
  {
    name: "Favourites",
    items: [
      { txt: "Recents", ico: <ClockIcon className="w-4 mr-1 text-blue-400" /> },
      {
        txt: "Applications",
        ico: <AtSymbolIcon className="w-4 mr-1 text-blue-400" />,
      },
      {
        txt: "Desktop",
        ico: <DesktopComputerIcon className="w-4 mr-1 text-blue-400" />,
      },
      {
        txt: "Documents",
        ico: <DocumentIcon className="w-4 mr-1 text-blue-400" />,
      },
      {
        txt: "Downloads",
        ico: <ArrowCircleDownIcon className="w-4 mr-1 text-blue-400" />,
      },
    ],
  },
  {
    name: "iCloud",
    items: [
      {
        txt: "iCloud Drive",
        ico: <CloudIcon className="w-4 mr-1 text-blue-400" />,
      },
      {
        txt: "Shared",
        ico: <FolderOpenIcon className="w-4 mr-1 text-blue-400" />,
      },
    ],
  },
  {
    name: "Tags",
    items: [
      {
        txt: "Red",
        ico: <div className="w-2 h-2 mr-2 rounded-full bg-red-500"></div>,
      },
      {
        txt: "Orange",
        ico: <div className="w-2 h-2 mr-2 rounded-full bg-orange-500"></div>,
      },
      {
        txt: "Yellow",
        ico: <div className="w-2 h-2 mr-2 rounded-full bg-yellow-500"></div>,
      },
      {
        txt: "Green",
        ico: <div className="w-2 h-2 mr-2 rounded-full bg-green-500"></div>,
      },
      {
        txt: "Blue",
        ico: <div className="w-2 h-2 mr-2 rounded-full bg-blue-500"></div>,
      },
    ],
  },
];
function Finder() {
  return (
    <div className="flex flex-row w-full h-full">
      <div
        className={
          "flex flex-col backdrop-blur-xl h-full w-48 max-w-48 " + Window.Glass
        }
      >
        {/* Section Left */}
        <div className="windowHandle  cursor-default  flex items-center pl-3 text-sm font-bold text-gray-800 h-12 max-h-12 bg-trasparent">
          {/* Left Title */}
        </div>
        <div className="px-2 overflow-y-auto cursor-default">
          {sideBarItems.map((item) => (
            <div className="flex flex-col mb-2 text-xs font-semibold text-gray-500">
              <h1>{item.name}</h1>
              {item.items.map((dc) => (
                <div className="flex flex-row items-center text-md py-1 font-normal hover:bg-white/60 rounded-md">
                  <div className="ml-1 ">{dc.ico}</div>
                  <h1>{dc.txt}</h1>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col bg-gray-50 w-full h-full ">
        <div
          className={
            "windowHandle cursor-default flex items-center pl-4 text-sm font-bold text-gray-600 h-12  border-b border-gray-300 " +
            Window.TitleBar
          }
        >
          <ChevronLeftIcon className="w-8 text-gray-400 hover:bg-gray-300/60 py-1 px-1.5 rounded-md" />
          <ChevronRightIcon className="w-8 mr-2  hover:bg-gray-300/60 py-1 px-1.5 rounded-md" />
          Recents
        </div>
        <div className={Window.Bg + "w-full h-full"}></div>
      </div>
    </div>
  );
}

export default Finder;
