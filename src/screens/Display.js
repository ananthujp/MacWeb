import React, { useEffect, useState } from "react";
import BrightOverlay from "../components/BrightOverlay";
import ContextMenu from "../elements/ContextMenu";
import Dock from "../elements/Dock";
import NavBar from "../elements/NavBar";
import useSlice from "../hooks/appSlice";
import bg from "../Images/bg-day.webp";
import ControlCenter from "../components/ControlCenter";
import Spotlight from "../components/Spotlight";
import Window from "../elements/Window";

import Facetime from "../Apps/Facetime";
import Finder from "../Apps/Finder";
import Notes from "../Apps/Notes";
import Maps from "../Apps/Maps";
import Safari from "../Apps/Safari";
import Calendar from "../Apps/Calendar";
import { useSelector } from "react-redux";
import { selectWindow } from "../reducer/appSlice";
import Launchpad from "./Launchpad";
import Calculator from "../Apps/Calculator";
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
  const [wDowsz, setWindow] = useState(null);
  const [wDows, setWindowz] = useState(null);
  const [launchpad, setLaunch] = useState(false);
  //let wDowsz = [];
  //Constructors
  useEffect(() => {
    switch (wDowsz && wDowsz[0].status) {
      case "launchpad":
        setLaunch(true);
        break;
      case "open":
        !wDows?.find((o) => o.name === wDowsz[0].name) &&
          setWindowz(wDows ? wDows.concat(wDowsz) : wDowsz);
        break;
      case "close":
        setWindowz(
          wDows.filter((value) => {
            return value !== wDows?.find((o) => o.name === wDowsz[0].name);
          })
        );
      default:
    }
    // wDowsz[0].status === "open" &&
    // !wDows?.find((o) => o.name === wDowsz[0].name) &&
    // setWindowz(wDows ? wDows.concat(wDowsz) : wDowsz);

    wDowsz &&
      wDowsz[0].status === "close" &&
      setWindowz(
        wDows.filter((value) => {
          return value !== wDows?.find((o) => o.name === wDowsz[0].name);
        })
      );

    //console.log(wDows);
  }, [wDowsz]);

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
        e.target.dataset.context !== "dock" &&
        setContext({
          ...context,
          show: false,
          items: context.items,
          controlC: false,
        });
      e.target.dataset.context === "desktop" &&
        setState({ ...controlStates, show: false, spotlight: false });
    });
    //context menu listeners ends here
  }, []);
  const windowSwitch = (wdow) => {
    switch (wdow) {
      case "Notes":
        return <Notes />;
      case "Facetime":
        return <Facetime />;
      case "Maps":
        return <Maps />;
      case "Finder":
        return <Finder />;
      case "Calendar":
        return <Calendar />;
      case "Safari":
        return <Safari />;
      case "Calculator":
        return <Calculator />;
      default:
        return <Finder />;
    }
  };
  // useEffect(() => {
  //   console.log(wDows);
  // }, [wDows]);

  return (
    <div
      data-context="desktop"
      className="flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <BrightOverlay />
      <ControlCenter />
      {launchpad ? <Launchpad hide={setLaunch} openW={setWindow} /> : <></>}
      <Spotlight />
      {wDows?.map((wdow, i) => (
        <Window
          key={`opened.Window${i}`}
          name={wdow.name}
          config={wdow.window}
          action={setWindow}
        >
          {windowSwitch(wdow.name)}
        </Window>
      ))}
      <ContextMenu
        Items={context.items}
        show={context.show}
        options={context}
      />

      <NavBar />
      <Dock openW={setWindow} />
    </div>
  );
}

export default Display;
