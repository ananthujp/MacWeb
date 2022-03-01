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
import Launchpad from "./Launchpad";
import Calculator from "../Apps/Calculator";
import Notch from "../elements/Notch";
import Siri from "../Apps/Siri";
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
function Display({ handle }) {
  const { context, setContext, controlStates, setState } = useSlice();
  const [wDowsz, setWindow] = useState(null);
  const [wDows, setWindowz] = useState(null);
  const [launchpad, setLaunch] = useState(false);
  const [siri, setSiri] = useState(false);
  const [focus, setFocus] = useState(null);
  //let wDowsz = [];
  //Constructors
  useEffect(() => {
    switch (wDowsz && wDowsz[0].status) {
      case "Launchpad":
        setLaunch(true);
        break;
      case "Siri":
        setSiri(true);
        break;
      case "open":
        //!wDows?.find((o) => o.name === wDowsz[0].name) &&

        setWindowz((prevState) => ({
          ...prevState,
          [wDowsz[0].name]: wDowsz,
        }));
        setFocus(wDowsz[0].name);
        break;
      case "close":
        setWindowz((prevState) => ({
          ...prevState,
          [wDowsz[0].name]: wDowsz,
        }));
        break;
      default:
    }
    wDows && Object.keys(wDows).map((dc) => console.log(wDows[dc].name));
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
  //   console.log(focus);
  // }, [focus]);

  return (
    <div
      data-context="desktop"
      className="flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <BrightOverlay />
      <ControlCenter handle={handle} />
      {launchpad ? <Launchpad hide={setLaunch} openW={setWindow} /> : <></>}
      <Spotlight />
      {/* {wDows?.map((wdow, i) => (
        <Window
          key={`opened.Window${i}`}
          name={wdow.name}
          config={wdow.window}
          action={setWindow}
        >
          {windowSwitch(wdow.name)}
        </Window>
      ))} */}
      {wDows &&
        Object.keys(wDows).map(
          (dc, i) =>
            wDows[dc][0].status === "open" && (
              <Window
                focus={focus === wDows[dc][0].name ? true : false}
                key={`opened.Window${i}`}
                name={wDows[dc][0].name}
                config={wDows[dc][0].window}
                action={setWindow}
              >
                <div
                  onMouseDown={() => setFocus(wDows[dc][0].name)}
                  className="w-full h-full"
                >
                  {windowSwitch(wDows[dc][0].name)}
                </div>
              </Window>
            )
        )}
      <ContextMenu
        Items={context.items}
        show={context.show}
        options={context}
      />

      <NavBar />
      {siri ? <Siri hide={setSiri} /> : <></>}
      <Notch />
      <Dock openW={setWindow} />
    </div>
  );
}

export default Display;
