import React from "react";
import useSlice from "../hooks/appSlice";

function BrightOverlay() {
  const { controlStates } = useSlice();
  return (
    <div
      className={"absolute pointer-events-none z-50 w-screen h-screen"}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${
          1 - controlStates.brightness / 100 < 0.85
            ? 1 - controlStates.brightness / 100
            : 0.85
        })`,
      }}
    ></div>
  );
}

export default BrightOverlay;
