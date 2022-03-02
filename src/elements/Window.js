import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import { XIcon, CodeIcon, MinusIcon } from "@heroicons/react/outline";
function Window({ children, name, action, config, focus }) {
  const [wstate, setwState] = useState("normal");
  const [anim, setAnim] = useState(" ");
  const [windowState, setState] = useState({
    x:
      0.5 * window.innerWidth -
      0.5 * config.width +
      Math.floor(Math.random() * (60 + 60 + 1) - 60),
    y:
      0.5 * window.innerHeight -
      0.5 * config.height +
      Math.floor(Math.random() * (60 + 60 + 1) - 60),
    width: config.width,
    height: config.height,
  });
  useEffect(() => {
    switch (wstate) {
      case "max":
        setAnim(" transition-all duration-750");
        setState({
          x: 1,
          y: 25,
          width: window.innerWidth - 3,
          height: window.innerHeight - 26,
        });
        break;
      case "maxs":
        setAnim(" transition-all duration-750");
        setState({
          x: 0.5 * window.innerWidth - 0.5 * config.width,
          y: 0.5 * window.innerHeight - 0.5 * config.height,
          width: config.width,
          height: config.height,
        });
        break;
      case "min":
        setAnim(" transition-all duration-1000");
        setState({
          x: 0.5 * window.innerWidth,
          y: window.innerHeight,
          width: 5,
          height: 5,
        });
        break;
      default:
    }

    setTimeout(() => setAnim(" "), 300);
  }, [wstate]);

  const Wbuttons = () => {
    const handleClose = () => {
      action([{ status: "close", name: name }]);
    };
    return (
      <div className="absolute left-2 top-4 z-10 group flex flex-row">
        <div
          onClick={() => handleClose()}
          className="w-3 h-3 rounded-full mx-1 active:bg-red-600/70 bg-red-500/80 border border-red-600/80"
        >
          <div className="hidden group-hover:block">
            <XIcon />
          </div>
        </div>
        <div
          onClick={() => setwState("min")}
          className="w-3 h-3 rounded-full mx-1 active:bg-yellow-600/70  bg-yellow-500/70 border border-yellow-600/80"
        >
          <div className="hidden group-hover:block">
            <MinusIcon />
          </div>
        </div>
        <div
          onClick={() => {
            (wstate === "max" || wstate === "maxs") && wstate === "max"
              ? setwState("maxs")
              : setwState("max");
          }}
          className="w-3 h-3 rounded-full mx-1 active:bg-green-600/70 bg-green-500/70 border border-green-600/80"
        >
          <div className="hidden group-hover:block rotate-45">
            <CodeIcon />
          </div>
        </div>
      </div>
    );
  };
  return (
    <Rnd
      bounds="parent"
      size={{
        width: windowState.width,
        height: windowState.height,
      }}
      disableDragging={wstate === "max" ? true : false}
      enableResizing={config.resize}
      onResizeStop={(e, direction, ref, delta) => {
        setState({
          ...windowState,
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
        });
      }}
      onDragStop={(e, d) => {
        setState({ ...windowState, x: d.x, y: d.y });
      }}
      position={{ x: windowState.x, y: windowState.y }}
      dragHandleClassName="windowHandle"
      className={
        `absolute overflow-hidden bg-transparent w-full h-full rounded-lg ` +
        anim +
        (focus ? " z-50  shadow-xl" : "  shadow-md")
      }
    >
      <Wbuttons />
      {children}
    </Rnd>
  );
}

export default Window;
