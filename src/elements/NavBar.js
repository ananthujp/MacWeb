import React, { useEffect, useState } from "react";
import useSlice from "../hooks/appSlice";

import { SearchIcon, WifiIcon } from "@heroicons/react/outline";

function NavBar({ systemState }) {
  const [time, setTime] = useState(Date().substring(16, 21));

  const { context, setContext, controlStates, setState } = useSlice();
  const appleMenu = [
    [{ name: "About This Mac" }],
    [{ name: "System Preferences..." }, { name: "App Store..." }],

    [
      { name: "Sleep" },
      {
        name: (
          <div onClick={() => setTimeout(() => systemState("boot"), 200)}>
            Restart...
          </div>
        ),
      },
      {
        name: (
          <div onClick={() => setTimeout(() => systemState("boot"), 200)}>
            Shut Down...
          </div>
        ),
      },
    ],
    [
      {
        name: (
          <div onClick={() => setTimeout(() => systemState("login"), 200)}>
            Lock Screen
          </div>
        ),
      },
      {
        name: (
          <div onClick={() => setTimeout(() => systemState("login"), 200)}>
            Log Out
          </div>
        ),
      },
    ],
  ];
  const fileMenu = [
    [
      { name: "New Finder Window" },
      { name: "New Folder" },
      { name: "New Smart Folder" },
      { name: "New Tab" },
    ],
  ];
  const finderMenu = [
    [{ name: "About Finder" }],
    [{ name: "Preferences" }],
    [{ name: "Empty Bin" }],
    [
      {
        name: "Services",
        shade: true,
        shadeItems: [
          [{ name: "Acitivity Monitor" }],
          [{ name: "File Activity" }],
        ],
      },
      { name: "Hide Finder" },
    ],
  ];
  const LeftItems = [
    {
      name: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          className="iconify iconify--logos pointer-events-none"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 315"
          fill="#ffffff"
        >
          <path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615-.35 1.116-6.599 22.563-21.757 44.716-13.104 19.153-26.705 38.235-48.13 38.63-21.05.388-27.82-12.483-51.888-12.483-24.061 0-31.582 12.088-51.51 12.871-20.68.783-36.428-20.71-49.64-39.793-27-39.033-47.633-110.3-19.928-158.406 13.763-23.89 38.36-39.017 65.056-39.405 20.307-.387 39.475 13.662 51.889 13.662 12.406 0 35.699-16.895 60.186-14.414 10.25.427 39.026 4.14 57.503 31.186-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199-15.826.636-34.962 10.546-46.314 23.828-10.173 11.763-19.082 30.589-16.678 48.633 17.64 1.365 35.66-8.964 46.64-22.262"></path>
        </svg>
      ),
      menu: appleMenu,
    },
    {
      name: <h1 className=" font-semibold pointer-events-none">Finder</h1>,
      menu: finderMenu,
    },
    { name: "File", menu: fileMenu },
    { name: "Edit", menu: fileMenu },
    { name: "View", menu: fileMenu },
    { name: "Go", menu: fileMenu },
    { name: "Window", menu: fileMenu },
    { name: "Help", menu: fileMenu },
  ];
  const RightItems = [
    <WifiIcon width="1.25rem" />,
    <div
      onClick={() =>
        setState({ ...controlStates, spotlight: !controlStates.spotlight })
      }
    >
      <SearchIcon width="1.25rem" />
    </div>,
    <div
      onClick={() => setState({ ...controlStates, show: !controlStates.show })}
    >
      <img
        className="w-4 mt-0.5 invert"
        src="https://eshop.macsales.com/blog/wp-content/uploads/2021/03/control-center-icon.png"
        alt=""
      />
    </div>,
    Date().substring(0, 11),
    time,
  ];
  useEffect(() => {
    setInterval(() => {
      setTime(Date().substring(16, 21));
    }, 10 * 1000);
  }, []);

  return (
    <div
      className="absolute h-6 top-0 w-full backdrop-blur-xl
  bg-white/30 cursor-default flex flex-row justify-between items-center"
    >
      <div className=" mx-2 flex flex-row text-white items-center">
        {LeftItems.map((item, index) => (
          <div
            data-context="navigation-bar"
            onClick={(e) =>
              setContext({
                pageX: e.target.getBoundingClientRect().left - 2,
                pageY: e.target.getBoundingClientRect().bottom + 3,
                show: true,
                items: item.menu,
                nav: true,
              })
            }
            onMouseEnter={(e) =>
              setContext({
                pageX: e.target.getBoundingClientRect().left - 2,
                pageY: e.target.getBoundingClientRect().bottom + 3,
                show: context.nav ? context.nav : false,
                items: item.menu,
                nav: context.nav ? context.nav : false,
              })
            }
            key={`Nav.left.${index}`}
            className="items-center flex h-6 px-2 rounded-sm hover:bg-white/20 active:bg-white/20 text-sm"
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="text-sm mx-2 flex flex-row text-white items-center">
        {RightItems.map((item, index) => (
          <div
            key={`Nav.right.${index}`}
            className="items-center flex h-6 mx-0 text-sm px-2 rounded-sm active:bg-white/20"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
