import React, { useEffect, useState } from "react";
import BrightOverlay from "../components/BrightOverlay";
import ContextMenu from "../elements/ContextMenu";
import Dock from "../elements/Dock";
import NavBar from "../elements/NavBar";
import useSlice from "../hooks/appSlice";
import bg from "../Images/bg-day.webp";
import ControlCenter from "../components/ControlCenter";
import { AnimatePresence } from "framer-motion";
import Spotlight from "../components/Spotlight";
const Items = [
  [{ name: "New Folder" }],
  [{ name: "Get Info" }, { name: "Change Desktop Background.." }],
  [
    { name: "Use Stacks" },
    {
      name: "Sort By",
      shade: true,
      shadeItems: [[{ name: "None" }], [{ name: "Snap to Grid" }]],
    },
    { name: "Clean Up" },
    {
      name: "Clean Up By",
      shade: true,
      shadeItems: [
        [
          { name: "Name" },
          { name: "Kind" },
          { name: "Date Modified" },
          { name: "Date Created" },
        ],
      ],
    },
    { name: "Show View Options" },
  ],
];
function Display() {
  const { context, setContext, controlStates, setState } = useSlice();

  //Constructors
  useEffect(() => {
    // context menu listeners starts here
    window.addEventListener("contextmenu", (e) => e.preventDefault());
    document.addEventListener(
      "contextmenu",
      (e) =>
        e.target.dataset.context === "desktop" &&
        setContext({
          ...context,
          pageX: e.pageX,
          pageY: e.pageY,
          show: true,
          items: Items,
        })
    );
    document.addEventListener("click", (e) => {
      e.target.dataset.context !== "navigation-bar" &&
        setContext({
          ...context,
          show: false,
          items: context.items,
          controlC: false,
        });
      e.target.dataset.context === "desktop" &&
        setState({ ...controlStates, show: false, spotlight: false });
    });
    // context menu listeners ends here
  }, []);

  return (
    <div
      data-context="desktop"
      className="flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <BrightOverlay />
      <AnimatePresence>
        {controlStates.show && <ControlCenter />}
      </AnimatePresence>
      {controlStates.spotlight && <Spotlight />}

      <ContextMenu
        Items={context.items}
        show={context.show}
        options={context}
      />

      <NavBar />
      <Dock />
    </div>
  );
}

export default Display;
