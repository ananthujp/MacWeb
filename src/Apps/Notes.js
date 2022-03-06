import React from "react";
import {
  ViewGridIcon,
  MenuIcon,
  TrashIcon,
  PencilAltIcon,
  SearchIcon,
  FolderIcon,
} from "@heroicons/react/outline";
import { TabButton, Window, Text } from "../Colors/Window";
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
      <div
        className={
          "flex flex-col border-r bg-gray-50 backdrop-blur-xl h-full w-96 max-w-96" +
          TabButton[2] +
          Window.Bg
        }
      >
        {/* Section Left */}
        <div className="windowHandle  cursor-default  flex flex-row justify-between items-center pl-20 pr-2 text-sm font-bold h-12 max-h-12 bg-trasparent">
          <div className="flex flex-row pl-1">
            <MenuIcon className="w-7 p-1 rounded-md hover:bg-gray-400/30" />
            <ViewGridIcon className="w-7 p-1 rounded-md hover:bg-gray-400/30" />
          </div>
          <TrashIcon className="w-7 p-1 rounded-md hover:bg-gray-400/30" />
        </div>
        <div className="flex flex-col px-2 pt-4 overflow-y-auto cursor-default">
          {NoteData.map((dc) => (
            <div
              className={"flex flex-col my-0.5 p-2 rounded-lg" + TabButton[3]}
            >
              <h1 className={" text-sm font-bold" + Text.active}>{dc.title}</h1>
              <div className="flex flex-row">
                <h1 className={" text-xs mr-2 font-medium " + Text.active}>
                  {dc.time}
                </h1>
                <h1 className={" text-xs font-thin " + Text.active}>
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
      <div className={"flex flex-col w-full h-full " + Window.Bg}>
        <div
          className={
            "windowHandle flex-row justify-between cursor-default flex items-center px-4 text-sm font-bold h-12 border-b  " +
            Window.Bg +
            Text.active +
            TabButton[2]
          }
        >
          <PencilAltIcon className="w-7 p-1 rounded-md hover:bg-gray-400/30" />
          <div className={"flex flex-row rounded-md border p-1" + TabButton[2]}>
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
