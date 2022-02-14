import React, { useState } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, SearchIcon } from "@heroicons/react/outline";
const sideBarItems = [
  {
    name: "iCloud",
    items: [
      { item: "Home", color: "" },
      { item: "Calendar", color: "" },
      { item: "Work", color: "" },
    ],
  },
  {
    name: "Google",
    items: [
      { item: "Home", color: "" },
      { item: "Birthdays", color: "" },
      { item: "Work", color: "" },
    ],
  },
  {
    name: "Other",
    items: [
      { item: "Birthdays", color: "" },
      { item: "India Holidays", color: "" },
      { item: "Siri Suggestions", color: "" },
    ],
  },
];
const month = (m) => {
  const date = new Date();
  date.setDate(1);
  date.setMonth(m);
  const lastDay = new Date(date.getFullYear(), m + 1, 0).getDate();
  const prevLastDay = new Date(date.getFullYear(), m, 0).getDate();
  let Days = [];
  for (let i = date.getDay() - 1; i >= 0; i--) {
    Days.push(prevLastDay - i);
  }
  for (let i = 1; i <= lastDay; i++) {
    Days.push(i);
  }
  for (let i = 1; Days.length < 35; i++) {
    Days.push(i);
  }
  return Days;
};
const Month = () => {
  const Days = month(10);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="flex flex-col px-2">
          <h1>S</h1>
          {Days.map((dc, index) => index % 7 === 0 && <h1>{dc}</h1>)}
        </div>
        <div className="flex flex-col px-2">
          <h1>M</h1>
          {Days.map((dc, index) => (index + 6) % 7 === 0 && <h1>{dc}</h1>)}
        </div>
        <div className="flex flex-col px-2">
          <h1>T</h1>
          {Days.map((dc, index) => (index + 5) % 7 === 0 && <h1>{dc}</h1>)}
        </div>
        <div className="flex flex-col px-2">
          <h1>W</h1>
          {Days.map((dc, index) => (index + 4) % 7 === 0 && <h1>{dc}</h1>)}
        </div>
        <div className="flex flex-col px-2">
          <h1>T</h1>
          {Days.map((dc, index) => (index + 3) % 7 === 0 && <h1>{dc}</h1>)}
        </div>
        <div className="flex flex-col px-2">
          <h1>F</h1>
          {Days.map((dc, index) => (index + 2) % 7 === 0 && <h1>{dc}</h1>)}
        </div>
        <div className="flex flex-col px-2">
          <h1>S</h1>
          {Days.map((dc, index) => (index + 1) % 7 === 0 && <h1>{dc}</h1>)}
        </div>
      </div>
    </div>
  );
};
function Calendar() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="flex flex-row w-full h-full">
      <motion.div
        animate={{
          width: sidebar ? [0, 200] : [200, 0],
          transition: { duration: 1 },
        }}
        className={
          "flex-col bg-white/60 backdrop-blur-xl h-full w-48 max-w-48" +
          (sidebar ? " flex" : " hidden ")
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
                <div className="flex flex-row text-md items-center py-1 font-normal pl-4 hover:bg-white/60 rounded-md">
                  <input type="checkbox" className="mr-1 -mt-0.5" />
                  {dc.item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
      <div className="flex flex-col bg-gray-50 w-full h-full ">
        <div
          className={
            "windowHandle cursor-default flex flex-row justify-between items-center pl-4 text-sm font-bold text-gray-600 h-12 bg-gray-200 border-b border-gray-300"
          }
        >
          <div
            onClick={() => setSidebar(!sidebar)}
            className={"flex flex-row" + (sidebar ? " " : " ml-14")}
          >
            <CalendarIcon className="w-8 hover:bg-gray-300/60 py-1 px-1.5 rounded-md" />
          </div>
          <div className="border rounded-md border-gray-500/20 flex flex-row font-normal text-xs">
            <div className="pr-2 pl-4 py-1 hover:bg-gray-300">Day </div>
            <div className="pl-2  py-1 pr-2 border-l border-gray-300 hover:bg-gray-300">
              Week
            </div>
            <div className="pl-2  py-1 pr-2 border-l border-gray-300 hover:bg-gray-300">
              Month
            </div>
            <div className="pl-2  py-1 pr-4 border-l border-gray-300 hover:bg-gray-300">
              Year
            </div>
          </div>
          <div>
            <div className="flex flex-row rounded-md border border-gray-300 p-1 mr-2">
              <SearchIcon onClick={() => month(0)} className="w-4 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent text-xs"
              />
            </div>
          </div>
        </div>

        <div>
          <Month month={0} />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
