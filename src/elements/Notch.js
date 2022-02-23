import React from "react";
import { useSelector } from "react-redux";
import { selectCAM } from "../reducer/appSlice";

function Notch() {
  const CAM = useSelector(selectCAM);
  return (
    <div className="absolute flex flex-row justify-around px-14 items-center top-0 bg-black h-6 w-36 rounded-b-lg">
      <div className="h-3 w-3 flex rounded-full bg-gray-800/80">
        <div className="h-1 w-1 mx-auto my-auto rounded-full bg-gray-700/60"></div>
      </div>
      <div
        className={
          "h-1 w-1 transition-all rounded-full " +
          (CAM.camera
            ? "bg-green-500"
            : CAM.mic
            ? "bg-orange-500"
            : "bg-gray-600")
        }
      ></div>
    </div>
  );
}

export default Notch;
