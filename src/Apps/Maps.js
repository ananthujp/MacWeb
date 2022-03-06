import React, { useState } from "react";
import {
  ViewGridIcon,
  MenuIcon,
  TrashIcon,
  TemplateIcon,
  SearchIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { HomeIcon, BriefcaseIcon } from "@heroicons/react/solid";
import { Map, Marker } from "pigeon-maps";
import { BorderClass, TabButton, Text, Window } from "../Colors/Window";
const sideBarItems = [
  {
    name: "Favourites",
    items: [
      {
        name: "Home",
        icon: <HomeIcon className="w-5" />,
      },
      {
        name: "Work",
        icon: <BriefcaseIcon className="w-5" />,
      },
    ],
  },
  {
    name: "My Guides",
    items: [
      {
        name: "Add Guide",
        icon: <PlusIcon className="w-5" />,
      },
    ],
  },
];
function Maps() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div className="flex flex-row w-full h-full">
      <motion.div
        animate={{
          width: sidebar ? [0, 200] : [200, 0],
          transition: { duration: 1 },
        }}
        className={
          "flex-col border-r backdrop-blur-xl h-full w-96 max-w-96 " +
          (sidebar ? " flex" : " hidden ") +
          Window.TitleBar +
          BorderClass.light
        }
      >
        {/* Section Left */}
        <div className="windowHandle  cursor-default  flex flex-row justify-between items-center pl-20 pr-2 text-sm font-bold text-gray-500 h-12 max-h-12 bg-trasparent"></div>
        <div className="flex flex-col px-2 pt-4 overflow-y-auto cursor-default">
          <div
            className={
              "flex flex-row rounded-md border p-1" +
              Window.Light +
              BorderClass.light
            }
          >
            <SearchIcon className="w-4 mr-2" />
            <input
              type="text"
              placeholder="Search Maps"
              className="outline-none bg-transparent text-xs"
            />
          </div>
          {sideBarItems.map((item) => (
            <div className="flex px-2 flex-col my-2 text-xs font-semibold text-gray-400">
              <h1>{item.name}</h1>
              {item.items.map((dc) => (
                <div className="flex group mt-2 flex-row justify-between text-md py-1 font-normal ml-1 rounded-md">
                  <div className="flex flex-row">
                    <div
                      alt=""
                      className={
                        "flex items-center justify-center text-blue-500  w-8 h-8 object-cover rounded-full" +
                        Window.Semi
                      }
                    >
                      {dc.icon}
                    </div>
                    <div className="flex flex-col ml-2 justify-center w-44">
                      <h1 className={"font-default " + Text.dark}>{dc.name}</h1>
                      <div className="flex flex-row">Add</div>
                    </div>
                  </div>
                  <div className="flex items-center w-8 -ml-16 mr-4">
                    <div className="flex-row items-center hidden group-hover:flex">
                      <div className="w-4 h-4 mr-1 rounded-full text-center bg-gray-600/40 text-gray-50">
                        i
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
      <div className={"flex flex-col w-full h-full " + Window.TitleBar}>
        <div
          className={
            "windowHandle flex-row justify-between cursor-default flex items-center px-4 text-sm font-bold text-gray-600 h-12 border-b  " +
            TabButton[2] +
            Window.TitleBar
          }
        >
          <div
            className={
              "flex flex-row items-center" + (sidebar ? " " : " ml-14")
            }
          >
            <TemplateIcon
              onClick={() => setSidebar(!sidebar)}
              className="w-7 p-1 rounded-md hover:bg-gray-400/30 mr-2"
            />
            Maps
          </div>
        </div>
        <div className="flex flex-col w-full h-full items-center">
          <Map defaultCenter={[23.2114, 72.6842]} defaultZoom={11}>
            <Marker width={50} anchor={[23.2114, 72.6842]} />
          </Map>
        </div>
      </div>
    </div>
  );
}

export default Maps;
