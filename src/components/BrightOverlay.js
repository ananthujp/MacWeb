import React from "react";
import { useSelector } from "react-redux";
import useSlice from "../hooks/appSlice";
import { selectControlStates } from "../reducer/appSlice";

function BrightOverlay() {
  const { controlStates } = useSlice();

  const brightness = useSelector(selectControlStates);
  return (
    <div
      className={"absolute pointer-events-none w-screen h-screen"}
      style={{
        zIndex: 200,
        backgroundColor: `rgba(0, 0, 0, ${
          1 - brightness.brightness / 100 < 0.85
            ? 1 - brightness.brightness / 100
            : 0.85
        })`,
      }}
    ></div>
  );
}

export default BrightOverlay;
