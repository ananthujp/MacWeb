import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@heroicons/react/outline";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
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
const month = (m, y) => {
  const date = new Date();
  date.setDate(1);
  date.setMonth(m);
  date.setYear(y);
  const lastDay = new Date(date.getFullYear(), m + 1, 0).getDate();
  const prevLastDay = new Date(date.getFullYear(), m, 0).getDate();
  let Days = [];
  for (let i = date.getDay() - 1; i >= 0; i--) {
    Days.push(<div className="text-gray-300">{prevLastDay - i}</div>);
  }
  for (let i = 1; i <= lastDay; i++) {
    i === new Date().getDate() &&
    m === new Date().getMonth() &&
    y === new Date().getFullYear()
      ? Days.push(
          <div className="text-white bg-red-500 px-1 rounded-full">{i}</div>
        )
      : Days.push(<div>{i}</div>);
  }
  for (let i = 1; Days.length < 42; i++) {
    Days.push(<div className="text-gray-300">{i}</div>);
  }
  if (Days.length > 35) {
    for (let i = 1; Days.length < 42; i++) {
      Days.push(<div className="text-gray-300">{i}</div>);
    }
  }
  return Days;
};
const Timeline = () => {
  const time = [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
  ];
  return (
    <div className="overflow-auto">
      <div className="grid text-left grid-cols-[50px_90%] mt-12 px-6 grid-rows-6 w-full">
        {time.map((dc, i) => (
          <>
            <div key={`time.child1${i}`} className="mb-12">
              {dc}
            </div>
            <div
              key={`time.child2${i}`}
              className="h-3 border-b border-gray-300"
            ></div>
          </>
        ))}
      </div>
    </div>
  );
};
const monthd = (m, y, d) => {
  const date = new Date();
  date.setDate(1);
  date.setMonth(m);
  date.setYear(y);
  const lastDay = new Date(date.getFullYear(), m + 1, 0).getDate();
  const prevLastDay = new Date(date.getFullYear(), m, 0).getDate();
  let Days = [];
  for (let i = date.getDay() - 1; i >= 0; i--) {
    Days.push(<div className="text-gray-300">{prevLastDay - i}</div>);
  }
  for (let i = 1; i <= lastDay; i++) {
    (i === new Date().getDate() || i === d) &&
    m === new Date().getMonth() &&
    y === new Date().getFullYear()
      ? Days.push(
          <div
            className={
              "text-white px-1 rounded-full" +
              (i === d ? " bg-gray-500" : " bg-red-500")
            }
          >
            {i}
          </div>
        )
      : Days.push(<div>{i}</div>);
  }
  for (let i = 1; Days.length < 42; i++) {
    Days.push(<div className="text-gray-300">{i}</div>);
  }
  if (Days.length > 35) {
    for (let i = 1; Days.length < 42; i++) {
      Days.push(<div className="text-gray-300">{i}</div>);
    }
  }
  return Days;
};
const DayView = () => {
  const [d, setD] = useState({
    d: new Date().getDate(),
    m: new Date().getMonth(),
    y: new Date().getFullYear(),
  });
  return (
    <div className="flex flex-row h-full">
      <div className="flex flex-col w-full  h-full">
        <div className="flex flex-row mt-4 justify-between items-center px-4">
          <div className="flex flex-row">
            <h1 className="text-3xl font-bold">{d.d} &nbsp;</h1>
            <h1 className="text-3xl font-bold">{months[d.m]} &nbsp;</h1>
            <h1 className="text-3xl ">{d.y}</h1>
          </div>
        </div>
        <h1 className="text-xl font-light ml-4">
          {days[new Date(d.y, d.m, d.d).getDay()]}
        </h1>
        <div className="w-full border-b mx-4 border-gray-300"></div>

        <Timeline />
      </div>
      <div className="flex flex-row items-start bg-gray-300">
        <MonthDay m={d.m} y={d.y} d={d.d} />

        <div className="flex flex-row mt-2">
          <div
            onClick={() =>
              setD({
                y: d.m === 0 && d.d === 1 ? d.y - 1 : d.y,
                m: d.d === 1 ? (d.m - 1 < 0 ? 11 : d.m - 1) : d.m,
                d:
                  d.d === 1
                    ? new Date(d.y, d.m, 0).getDate()
                    : d.d - 1 < 1
                    ? 31
                    : d.d - 1,
              })
            }
            className="flex h-6 rounded-md cursor-default bg-white active:bg-gray-200 shadow-md px-1 mx-1 py-0.5 text-sm"
          >
            <ChevronLeftIcon className="w-4" />
          </div>
          <div
            onClick={() =>
              setD({
                d: new Date().getDate(),
                m: new Date().getMonth(),
                y: new Date().getFullYear(),
              })
            }
            className="flex h-6 rounded-md cursor-default bg-white active:bg-gray-200 shadow-md px-4 py-0.5 text-sm"
          >
            Today
          </div>
          <div
            onClick={() =>
              setD({
                y: d.m === 11 && d.d === 31 ? d.y + 1 : d.y,
                m:
                  d.d === new Date(d.y, d.m + 1, 0).getDate()
                    ? d.m + 1 > 11
                      ? 0
                      : d.m + 1
                    : d.m,
                d:
                  d.d === new Date(d.y, d.m + 1, 0).getDate()
                    ? 1
                    : d.d + 1 > 31
                    ? 1
                    : d.d + 1,
              })
            }
            className="flex h-6 rounded-md cursor-default bg-white active:bg-gray-200 shadow-md px-1  mx-1 py-0.5 text-sm"
          >
            <ChevronRightIcon className="w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
const MonthView = () => {
  const [d, setD] = useState({
    m: new Date().getMonth(),
    y: new Date().getFullYear(),
  });
  const Days = month(d.m, d.y);
  return (
    <div className="flex flex-col w-full  h-full">
      <div className="flex flex-row mt-4 justify-between items-center px-4">
        <div className="flex flex-row">
          <h1 className="text-3xl font-bold">{months[d.m]} &nbsp;</h1>
          <h1 className="text-3xl ">{d.y}</h1>
        </div>
        <div className="flex flex-row">
          <div
            onClick={() =>
              setD({
                y: d.m === 0 ? d.y - 1 : d.y,
                m: d.m === 0 ? (d.m = 11) : d.m - 1,
              })
            }
            className="flex rounded-md cursor-default bg-white active:bg-gray-200 shadow-md px-1 mx-1 py-0.5 text-sm"
          >
            <ChevronLeftIcon className="w-4" />
          </div>
          <div
            onClick={() =>
              setD({
                m: new Date().getMonth(),
                y: new Date().getFullYear(),
              })
            }
            className="flex rounded-md cursor-default bg-white active:bg-gray-200 shadow-md px-4 py-0.5 text-sm"
          >
            Today
          </div>
          <div
            onClick={() =>
              setD({
                y: d.m === 11 ? d.y + 1 : d.y,
                m: d.m === 11 ? (d.m = 0) : d.m + 1,
              })
            }
            className="flex rounded-md cursor-default bg-white active:bg-gray-200 shadow-md px-1  mx-1 py-0.5 text-sm"
          >
            <ChevronRightIcon className="w-4" />
          </div>
        </div>
      </div>
      <div className="grid text-right grid-cols-7 w-full mt-4">
        <h1>Sun</h1>
        <h1>Mon</h1>
        <h1>Tue</h1>
        <h1>Wed</h1>
        <h1>Thu</h1>
        <h1>Fri</h1>
        <h1 className="mr-2">Sat</h1>
      </div>
      <div className="grid text-right grid-cols-7 grid-rows-6  h-full w-full">
        {Days.map((dc, index) => (
          <h1
            key={`days.monthview.${index}`}
            className="border border-gray-200 pr-2"
          >
            {dc}
          </h1>
        ))}
      </div>
    </div>
  );
};
const WeekView = () => {
  const Days = month(new Date().getMonth(), new Date().getFullYear());
  const [d, setD] = useState({
    w: Math.floor(
      (new Date().getDate() +
        new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay() -
        1) /
        7
    ),
    m: new Date().getMonth(),
    y: new Date().getFullYear(),
  });

  return (
    <div className="flex flex-col w-full  h-full">
      <div className="flex flex-row mt-4 justify-between items-center px-4">
        <div className="flex flex-row">
          <h1 className="text-3xl font-bold">{months[d.m]} &nbsp;</h1>
          <h1 className="text-3xl ">{d.y}</h1>
        </div>
        <div className="flex flex-row">
          <div
            onClick={() =>
              setD({
                y: d.m === 0 && d.w === 0 ? d.y - 1 : d.y,
                m: d.w === 0 ? (d.m - 1 < 0 ? 11 : d.m - 1) : d.m,
                w: d.w === 0 ? 5 : d.w - 1,
              })
            }
            className="flex rounded-md cursor-default bg-white active:bg-gray-200 shadow-md px-1 mx-1 py-0.5 text-sm"
          >
            <ChevronLeftIcon className="w-4" />
          </div>
          <div
            onClick={() =>
              setD({
                m: new Date().getMonth(),
                y: new Date().getFullYear(),
                w: Math.floor(
                  (new Date().getDate() +
                    new Date(
                      new Date().getFullYear(),
                      new Date().getMonth(),
                      1
                    ).getDay() -
                    1) /
                    7
                ),
              })
            }
            className="flex rounded-md cursor-default bg-white active:bg-gray-200 shadow-md px-4 py-0.5 text-sm"
          >
            Today
          </div>
          <div
            onClick={() =>
              setD({
                y: d.m === 11 && d.w === 5 ? d.y + 1 : d.y,
                m: d.w === 5 ? (d.m + 1 > 11 ? 0 : d.m + 1) : d.m,
                w: d.w === 5 ? 0 : d.w + 1,
              })
            }
            className="flex rounded-md cursor-default bg-white active:bg-gray-200 shadow-md px-1  mx-1 py-0.5 text-sm"
          >
            <ChevronRightIcon className="w-4" />
          </div>
        </div>
      </div>
      <div className="grid text-right grid-cols-7 w-full mt-4">
        <h1 className="flex flex-row justify-center">
          Sun&nbsp; {Days.slice(d.w * 7, d.w * 7 + 1)}
        </h1>
        <h1 className="flex flex-row justify-center">
          Mon&nbsp; {Days.slice(d.w * 7 + 1, d.w * 7 + 2)}
        </h1>
        <h1 className="flex flex-row justify-center">
          Tue&nbsp; {Days.slice(d.w * 7 + 2, d.w * 7 + 3)}
        </h1>
        <h1 className="flex flex-row justify-center">
          Wed&nbsp; {Days.slice(d.w * 7 + 3, d.w * 7 + 4)}
        </h1>
        <h1 className="flex flex-row justify-center">
          Thu&nbsp; {Days.slice(d.w * 7 + 4, d.w * 7 + 5)}
        </h1>
        <h1 className="flex flex-row justify-center">
          Fri&nbsp; {Days.slice(d.w * 7 + 5, d.w * 7 + 6)}
        </h1>
        <h1 className="flex flex-row justify-center mr-2">
          Sat&nbsp; {Days.slice(d.w * 7 + 6, d.w * 7 + 7)}
        </h1>
      </div>

      <Timeline />
    </div>
  );
};
const YearView = () => {
  const [y, setY] = useState(new Date().getFullYear());
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row mt-4 justify-between items-center px-4">
        <h1 className="text-3xl ">{y}</h1>
        <div className="flex flex-row">
          <div
            onClick={() => setY(y - 1)}
            className="flex rounded-md cursor-default bg-white active:bg-gray-200 shadow-md px-1 mx-1 py-0.5 text-sm"
          >
            <ChevronLeftIcon className="w-4" />
          </div>
          <div
            onClick={() => setY(new Date().getFullYear())}
            className="flex rounded-md cursor-default bg-white active:bg-gray-200 shadow-md px-4 py-0.5 text-sm"
          >
            Today
          </div>
          <div
            onClick={() => setY(y + 1)}
            className="flex rounded-md cursor-default bg-white active:bg-gray-200 shadow-md px-1  mx-1 py-0.5 text-sm"
          >
            <ChevronRightIcon className="w-4" />
          </div>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-4 grid-rows-3 transform w-full m-4">
        {Array.from(Array(12), (e, i) => (
          <Month key={`days.month.comp.${i}`} m={i} y={y} />
        ))}
      </div>
    </div>
  );
};
const Month = ({ m, y }) => {
  const Days = month(m, y);

  return (
    <div className="flex flex-col justify-center scale-90">
      <div className="text-red-500 mb-2 text-md">{months[m]}</div>
      <div className="flex flex-row text-xs -ml-2">
        <div className="flex flex-col items-center px-2">
          <h1 className="text-gray-600">S</h1>
          {Days.map(
            (dc, index) =>
              index % 7 === 0 && <h1 key={`days.y1view.${index}`}>{dc}</h1>
          )}
        </div>
        <div className="flex flex-col items-center px-2">
          <h1 className="text-gray-600">M</h1>
          {Days.map(
            (dc, index) =>
              (index + 6) % 7 === 0 && (
                <h1 key={`days.y2view.${index}`}>{dc}</h1>
              )
          )}
        </div>
        <div className="flex flex-col items-center px-2">
          <h1 className="text-gray-600">T</h1>
          {Days.map(
            (dc, index) =>
              (index + 5) % 7 === 0 && (
                <h1 key={`days.y3view.${index}`}>{dc}</h1>
              )
          )}
        </div>
        <div className="flex flex-col items-center px-2">
          <h1 className="text-gray-600">W</h1>
          {Days.map(
            (dc, index) =>
              (index + 4) % 7 === 0 && (
                <h1 key={`days.y4view.${index}`}>{dc}</h1>
              )
          )}
        </div>
        <div className="flex flex-col items-center px-2">
          <h1 className="text-gray-600">T</h1>
          {Days.map(
            (dc, index) =>
              (index + 3) % 7 === 0 && (
                <h1 key={`days.y5view.${index}`}>{dc}</h1>
              )
          )}
        </div>
        <div className="flex flex-col items-center px-2">
          <h1 className="text-gray-600">F</h1>
          {Days.map(
            (dc, index) =>
              (index + 2) % 7 === 0 && (
                <h1 key={`days.y6view.${index}`}>{dc}</h1>
              )
          )}
        </div>
        <div className="flex flex-col items-center px-2">
          <h1 className="text-gray-600">S</h1>
          {Days.map(
            (dc, index) =>
              (index + 1) % 7 === 0 && (
                <h1 key={`days.y7view.${index}`}>{dc}</h1>
              )
          )}
        </div>
      </div>
    </div>
  );
};
const MonthDay = ({ m, y, d }) => {
  const Days = monthd(m, y, d);

  return (
    <div className="flex flex-col justify-center scale-90">
      <div className="text-red-500 mb-2 text-md">{months[m]}</div>
      <div className="flex flex-row text-xs -ml-2">
        <div className="flex flex-col items-center px-2">
          <h1 className="text-gray-600">S</h1>
          {Days.map(
            (dc, index) =>
              index % 7 === 0 && <h1 key={`days.y1view.${index}`}>{dc}</h1>
          )}
        </div>
        <div className="flex flex-col items-center px-2">
          <h1 className="text-gray-600">M</h1>
          {Days.map(
            (dc, index) =>
              (index + 6) % 7 === 0 && (
                <h1 key={`days.y2view.${index}`}>{dc}</h1>
              )
          )}
        </div>
        <div className="flex flex-col items-center px-2">
          <h1 className="text-gray-600">T</h1>
          {Days.map(
            (dc, index) =>
              (index + 5) % 7 === 0 && (
                <h1 key={`days.y3view.${index}`}>{dc}</h1>
              )
          )}
        </div>
        <div className="flex flex-col items-center px-2">
          <h1 className="text-gray-600">W</h1>
          {Days.map(
            (dc, index) =>
              (index + 4) % 7 === 0 && (
                <h1 key={`days.y4view.${index}`}>{dc}</h1>
              )
          )}
        </div>
        <div className="flex flex-col items-center px-2">
          <h1 className="text-gray-600">T</h1>
          {Days.map(
            (dc, index) =>
              (index + 3) % 7 === 0 && (
                <h1 key={`days.y5view.${index}`}>{dc}</h1>
              )
          )}
        </div>
        <div className="flex flex-col items-center px-2">
          <h1 className="text-gray-600">F</h1>
          {Days.map(
            (dc, index) =>
              (index + 2) % 7 === 0 && (
                <h1 key={`days.y6view.${index}`}>{dc}</h1>
              )
          )}
        </div>
        <div className="flex flex-col items-center px-2">
          <h1 className="text-gray-600">S</h1>
          {Days.map(
            (dc, index) =>
              (index + 1) % 7 === 0 && (
                <h1 key={`days.y7view.${index}`}>{dc}</h1>
              )
          )}
        </div>
      </div>
    </div>
  );
};
const renderSwitch = (param) => {
  switch (param) {
    case "year":
      return <YearView />;
    case "month":
      return <MonthView />;
    case "week":
      return <WeekView />;
    case "day":
      return <DayView />;
    default:
      return <MonthView />;
  }
};
function Calendar() {
  const [sidebar, setSidebar] = useState(false);
  const [view, setView] = useState("month");
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
          {sideBarItems.map((item, index) => (
            <div
              key={`days.cal2view.${index}`}
              className="flex flex-col mb-2 text-xs font-semibold text-gray-500"
            >
              <h1>{item.name}</h1>
              {item.items.map((dc, index) => (
                <div
                  key={`days.cal1view.${index}`}
                  className="flex flex-row text-md items-center py-1 font-normal pl-4 hover:bg-white/60 rounded-md"
                >
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
            "windowHandle cursor-default flex flex-row justify-between items-center pl-4 text-sm font-bold text-gray-600 h-12 min-h-[40px] bg-gray-200 border-b border-gray-300"
          }
        >
          <div
            onClick={() => setSidebar(!sidebar)}
            className={"flex flex-row" + (sidebar ? " " : " ml-14")}
          >
            <CalendarIcon className="w-8 hover:bg-gray-300/60 py-1 px-1.5 rounded-md" />
          </div>
          <div className="border rounded-md border-gray-500/20 flex flex-row font-normal text-xs">
            <div
              onClick={() => setView("day")}
              className={
                "pr-2 pl-4 py-1 hover:bg-gray-300 " +
                (view === "day" ? "bg-gray-300 border-l-md" : "")
              }
            >
              Day{" "}
            </div>
            <div
              onClick={() => setView("week")}
              className={
                "pl-2  py-1 pr-2 border-l border-gray-300 hover:bg-gray-300 " +
                (view === "week" ? "bg-gray-300 " : "")
              }
            >
              Week
            </div>
            <div
              onClick={() => setView("month")}
              className={
                "pl-2  py-1 pr-2 border-l border-gray-300 hover:bg-gray-300 " +
                (view === "month" ? "bg-gray-300 " : "")
              }
            >
              Month
            </div>
            <div
              onClick={() => setView("year")}
              className={
                "pl-2  py-1 pr-4 border-l border-gray-300  hover:bg-gray-300 " +
                (view === "year" ? "bg-gray-300 rounded-r-md" : "")
              }
            >
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

        <div className=" h-full">{renderSwitch(view)}</div>
      </div>
    </div>
  );
}

export default Calendar;
