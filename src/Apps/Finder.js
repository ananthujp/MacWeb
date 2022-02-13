import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
const sideBarItems = [
  {
    name: "Favourites",
    items: ["Recents", "Applications", "Desktop", "Documents", "Downloads"],
  },
  {
    name: "iCloud",
    items: ["iCloud Drive", "Shared"],
  },
  {
    name: "Tags",
    items: ["Red", "Blue", "Yellow"],
  },
];
function Finder() {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col bg-white/60 backdrop-blur-xl h-full w-48 max-w-48">
        {/* Section Left */}
        <div className="windowHandle  cursor-default  flex items-center pl-3 text-sm font-bold text-gray-800 h-12 max-h-12 bg-trasparent">
          {/* Left Title */}
        </div>
        <div className="px-2 overflow-y-auto cursor-default">
          {sideBarItems.map((item) => (
            <div className="flex flex-col mb-2 text-xs font-semibold text-gray-500">
              <h1>{item.name}</h1>
              {item.items.map((dc) => (
                <div className="flex flex-row text-md py-1 font-normal pl-4 hover:bg-white/60 rounded-md">
                  {dc}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col bg-gray-50 w-full h-full ">
        <div className="windowHandle cursor-default flex items-center pl-4 text-sm font-bold text-gray-600 h-12 bg-gray-200 border-b border-gray-300">
          <ChevronLeftIcon className="w-8 text-gray-400 hover:bg-gray-300/60 py-1 px-1.5 rounded-md" />
          <ChevronRightIcon className="w-8 mr-2  hover:bg-gray-300/60 py-1 px-1.5 rounded-md" />
          Title
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Finder;
