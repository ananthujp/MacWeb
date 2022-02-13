import React from "react";
import {
  ViewGridIcon,
  MenuIcon,
  TrashIcon,
  PencilAltIcon,
  SearchIcon,
  FolderIcon,
} from "@heroicons/react/outline";
const NoteData = [
  {
    title: " Note 1",
    time: Date().substring(4, 16),
    desc: "Lorem ipsum asd s  dwqw eqweqweq",
  },
  {
    title: " Note 2",
    time: Date().substring(4, 16),
    desc: "Lorem ipsum asd s  dwqw eqweqweq",
  },
  {
    title: " Note 3",
    time: Date().substring(4, 16),
    desc: "Lorem ipsum asd s  dwqw eqweqweq",
  },
];
function Notes() {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col border-r border-gray-200 bg-gray-50 backdrop-blur-xl h-full w-96 max-w-96">
        {/* Section Left */}
        <div className="windowHandle  cursor-default  flex flex-row justify-between items-center pl-20 pr-2 text-sm font-bold text-gray-500 h-12 max-h-12 bg-trasparent">
          <div className="flex flex-row pl-1">
            <MenuIcon className="w-7 p-1 rounded-md hover:bg-gray-400/30" />
            <ViewGridIcon className="w-7 p-1 rounded-md hover:bg-gray-400/30" />
          </div>
          <TrashIcon className="w-7 p-1 rounded-md hover:bg-gray-400/30" />
        </div>
        <div className="flex flex-col px-2 pt-4 overflow-y-auto cursor-default">
          {NoteData.map((dc) => (
            <div className="flex flex-col my-0.5 hover:bg-gray-200 p-2 rounded-lg">
              <h1 className=" text-sm font-bold text-gray-600">{dc.title}</h1>
              <div className="flex flex-row">
                <h1 className=" text-xs mr-2 font-medium text-gray-600">
                  {dc.time}
                </h1>
                <h1 className=" text-xs font-thin text-gray-600">
                  {dc.desc.substring(0, 21)}
                </h1>
              </div>
              <div className="flex flex-row text-xs text-gray-400">
                <FolderIcon className="w-3 mr-1" />
                Notes
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col bg-gray-50 w-full h-full ">
        <div className="windowHandle flex-row justify-between cursor-default flex items-center px-4 text-sm font-bold text-gray-600 h-12 bg-gray-50 border-b border-gray-300 ">
          <PencilAltIcon className="w-7 p-1 rounded-md hover:bg-gray-400/30" />
          <div className="flex flex-row rounded-md border border-gray-200 p-1">
            <SearchIcon className="w-4 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent text-xs"
            />
          </div>
        </div>
        <div className="flex flex-col w-full h-full items-center">
          <h1 className="text-xs my-2 text-gray-400">
            {Date().substring(0, 24)}
          </h1>
          <textarea className="w-full h-full bg-transparent p-4 text-xs outline-none"></textarea>
        </div>
      </div>
    </div>
  );
}

export default Notes;
