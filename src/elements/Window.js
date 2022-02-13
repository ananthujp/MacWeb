import React from "react";
import { Rnd } from "react-rnd";
import { XIcon, CodeIcon, MinusIcon } from "@heroicons/react/outline";

const Wbuttons = () => {
  return (
    <div className="absolute left-2 top-4 z-10 group flex flex-row">
      <div className="w-3 h-3 rounded-full mx-1 active:bg-red-600/70 bg-red-500/80 border border-red-600/80">
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
function Window({ children }) {
  return (
    <Rnd
      bounds="parent"
      size={{
        width: 800,
        height: 400,
      }}
      dragHandleClassName="windowHandle"
      className={`absolute overflow-hidden bg-transparent w-full h-full shadow-md rounded-lg`}
    >
      <Wbuttons />
      {children}
    </Rnd>
  );
}

export default Window;
