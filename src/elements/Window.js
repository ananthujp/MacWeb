import React, { useState } from "react";
import { Rnd } from "react-rnd";
import { XIcon, CodeIcon, MinusIcon } from "@heroicons/react/outline";
function Window({ children, name, action, config }) {
  const [state, setStates] = useState({
    x: 0.5 * window.innerWidth - 0.5 * config.width,
    y: 0.5 * window.innerHeight - 0.5 * config.height,
  });
  const Wbuttons = () => {
    const handleClose = () => {
      // dispatch(
      //   setWindow({
      //     windows: wDows.splice(
      //       wDows.indexOf(wDows?.find((o) => o.name === name)),
      //       1
      //     ),
      //   })
      // );
      action([{ status: "close", name: name }]);
      // console.log(wDows.slice().splice(2, 1));
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
        <div className="w-3 h-3 rounded-full mx-1 active:bg-yellow-600/70  bg-yellow-500/70 border border-yellow-600/80">
          <div className="hidden group-hover:block">
            <MinusIcon />
          </div>
        </div>
        <div className="w-3 h-3 rounded-full mx-1 active:bg-green-600/70 bg-green-500/70 border border-green-600/80">
          <div className="hidden group-hover:block rotate-45">
            <CodeIcon />
          </div>
        </div>
      </div>
    );
  };
  const [windowState, setState] = useState({
    width: config.width,
    height: config.height,
  });
  return (
    <Rnd
      bounds="parent"
      size={{
        width: windowState.width,
        height: windowState.height,
      }}
      enableResizing={config.resize}
      onResizeStop={(e, direction, ref, delta) => {
        setState({
          ...windowState,
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
        });
      }}
      onDragStop={(e, d) => {
        setStates({ ...state, x: d.x, y: d.y });
      }}
      position={{ x: state.x, y: state.y }}
      dragHandleClassName="windowHandle"
      className={`absolute overflow-hidden bg-transparent w-full h-full shadow-md rounded-lg`}
    >
      <Wbuttons />
      {children}
    </Rnd>
  );
}

export default Window;
