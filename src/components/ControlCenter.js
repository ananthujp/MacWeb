import React, { useState } from "react";
import {
  WifiIcon,
  SunIcon,
  VolumeUpIcon,
  ChevronRightIcon,
  ZoomInIcon,
} from "@heroicons/react/outline";
import { motion } from "framer-motion";
import Spinner from "./Spinner";
import { MoonIcon, ZoomOutIcon } from "@heroicons/react/solid";
import useSlice from "../hooks/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectControlStates, setControlStates } from "../reducer/appSlice";
const Icon = ({ n, state }) => {
  const list = [
    <WifiIcon className="w-4" />,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320.523 320.523"
      fill="currentColor"
      stroke="currentColor"
      className="w-4"
      xmlSpace="preserve"
    >
      <path d="m254.413 225.551-69.147-69.148 65.289-65.29L159.442 0v130.579L76.716 47.853 66.109 58.459l93.333 93.333v9.222l-93.333 93.333 10.606 10.606 82.726-82.726v138.296l94.972-94.972zM174.442 36.213l54.9 54.9-54.683 54.683-.218-.217.001-109.366zm0 131.014.218-.217 58.541 58.542-58.759 58.759V167.227z" />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      fill="currentColor"
      className="w-5"
    >
      <path d="M15 3C7.832 3 2 8.832 2 16c0 4.774 2.593 8.944 6.44 11.205l1.08-1.682C6.227 23.62 4 20.07 4 16 4 9.935 8.935 5 15 5s11 4.935 11 11c0 4.069-2.227 7.62-5.52 9.523l1.08 1.682C25.408 24.945 28 20.774 28 16c0-7.168-5.832-13-13-13zm0 4c-4.962 0-9 4.038-9 9 0 3.364 1.86 6.3 4.602 7.844l1.08-1.684A7.003 7.003 0 0 1 8 16c0-3.86 3.14-7 7-7s7 3.14 7 7a7.007 7.007 0 0 1-3.682 6.162l1.08 1.682C22.14 22.299 24 19.364 24 16c0-4.962-4.038-9-9-9zm0 4c-2.757 0-5 2.243-5 5 0 1.955 1.138 3.633 2.777 4.455l1.082-1.682A3.003 3.003 0 0 1 12 16c0-1.654 1.346-3 3-3s3 1.346 3 3a3 3 0 0 1-1.861 2.771l1.082 1.684C18.86 19.635 20 17.955 20 16c0-2.757-2.243-5-5-5zm0 4a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1z" />
    </svg>,
    <MoonIcon className="w-4" />,
    <Spinner />,
  ];
  switch (state) {
    case false:
      return (
        <div className=" flex justify-center items-center mr-2 bg-gray-500/30 rounded-full w-8 h-8 text-black">
          {list[n]}
        </div>
      );
    case 1:
      return (
        <div className=" flex justify-center items-center mr-2 bg-gray-500/30 rounded-full w-8 h-8 text-black">
          {list[4]}
        </div>
      );
    case true:
      return (
        <div className=" flex justify-center items-center mr-2 bg-blue-500 rounded-full w-8 h-8 text-white">
          {list[n]}
        </div>
      );
    default:
      return (
        <div className=" flex justify-center items-center mr-2 bg-gray-500/30 rounded-full w-8 h-8 text-black">
          {list[n]}
        </div>
      );
  }
};
function ControlCenter({ handle }) {
  const { theme, setTheme, controlStates } = useSlice();
  const dispatch = useDispatch();
  const controlState = useSelector(selectControlStates);
  const handleButtons = (n) => {
    switch (n) {
      case 0:
        dispatch(
          setControlStates({
            ...controlState,
            wifi: 1,
            wifiState: controlState.wifi ? "Turning Off.." : "Turning On..",
          })
        );
        setTimeout(
          () =>
            dispatch(
              setControlStates({
                ...controlState,
                wifi: !controlState.wifi,
                wifiState: controlState.wifi ? "Off" : "On",
              })
            ),
          1000
        );
        break;
      case 1:
        dispatch(
          setControlStates({
            ...controlState,
            bt: 1,
            btState: controlState.bt ? "Turning Off.." : "Turning On..",
          })
        );
        setTimeout(
          () =>
            dispatch(
              setControlStates({
                ...controlState,
                bt: !controlState.bt,
                btState: controlState.bt ? "Off" : "On",
              })
            ),
          1000
        );
        break;
      case 2:
        dispatch(
          setControlStates({
            ...controlState,
            ad: 1,
            adState: controlState.ad ? "Turning Off.." : "Turning On..",
          })
        );
        setTimeout(
          () =>
            dispatch(
              setControlStates({
                ...controlState,
                ad: !controlState.ad,
                adState: controlState.ad ? "Off" : "On",
              })
            ),
          1000
        );
        break;
      default:
    }
  };

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className={
        "absolute top-7 cursor-default text-xs right-2 flex flex-col bg-white/30 backdrop-blur-xl shadow-sm p-2 rounded-xl " +
        (controlStates.show ? " block" : " hidden")
      }
    >
      <div className="flex flex-row">
        <div className="flex flex-col justify-between bg-white/10 backdrop-blur-xl mr-1 shadow-sm p-2 rounded-xl">
          <div
            onClick={() => handleButtons(0)}
            className="flex flex-row group justify-between"
          >
            <div className="flex flex-row w-32 ">
              <Icon n={0} state={controlState.wifi} />
              <div>
                <h1>Wi-Fi</h1>
                <h1 className="text-xxs">{controlState.wifiState}</h1>
              </div>
            </div>
            <div className="w-4 flex items-center">
              <ChevronRightIcon className="hidden w-4 group-hover:block" />
            </div>
          </div>
          <div
            onClick={() => handleButtons(1)}
            className="flex flex-row group justify-between"
          >
            <div className="flex flex-row">
              <Icon n={1} state={controlState.bt} />
              <div>
                <h1>Bluetooth</h1>
                <h1 className="text-xxs">{controlState.btState}</h1>
              </div>
            </div>
            <div className="w-4 flex items-center">
              <ChevronRightIcon className="hidden w-4 group-hover:block" />
            </div>
          </div>
          <div
            onClick={() => handleButtons(2)}
            className="flex flex-row group justify-between"
          >
            <div className="flex flex-row">
              <Icon n={2} state={controlState.ad} />
              <div>
                <h1>AirDrop</h1>
                <h1 className="text-xxs">{controlState.adState}</h1>
              </div>
            </div>
            <div className="w-4 flex items-center">
              <ChevronRightIcon className="hidden w-4 group-hover:block" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div
            onClick={() =>
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }
            className="flex fle-row bg-white/10 items-center backdrop-blur-xl ml-1 mb-1 shadow-sm px-2 py-4 rounded-xl "
          >
            <Icon n={3} state={theme === "dark" ? true : 0} />
            <h1>Dark Mode</h1>
          </div>
          <div
            onClick={handle.active ? handle.exit : handle.enter}
            className="flex fle-row items-center bg-white/10 backdrop-blur-xl ml-1 mb-1 shadow-sm px-2 py-4 rounded-xl"
          >
            <div className=" flex justify-center items-center mr-2 rounded-full w-8 h-8 text-black/70">
              {handle.active ? (
                <ZoomOutIcon className="w-6" />
              ) : (
                <ZoomInIcon className="w-6" />
              )}
            </div>
            <h1 className="w-20">
              {handle.active ? "Exit FullScreen" : "Enter FullScreen"}
            </h1>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col bg-white/10 mt-2 backdrop-blur-xl
shadow-sm px-2 py-2 rounded-lg w-full"
      >
        <div className="mb-1">Display</div>
        <div className="flex border border-gray-500/30 rounded-full flex-row items-center group">
          <div className="w-5 h-[21px] flex pl-1 items-center rounded-l-full transition-all bg-gray-50/60 group-hover:bg-gray-50/90 text-gray-800/50">
            <SunIcon />
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={controlState.brightness}
            className="slider rounded-r-full"
            onChange={(lg) =>
              dispatch(
                setControlStates({
                  ...controlState,
                  brightness: lg.target.value,
                })
              )
            }
          />
        </div>
      </div>
      <div
        className="bg-white/10 mt-2 backdrop-blur-xl
shadow-sm px-2 py-2 rounded-lg"
      >
        <div className="mb-1">Sound</div>
        <div className="flex flex-row border border-gray-500/30 rounded-full items-center group">
          <div className="w-5 h-[21px] flex pl-1 items-center rounded-l-full transition-all bg-gray-50/60 group-hover:bg-gray-50/90 text-gray-800/50">
            <VolumeUpIcon />
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={controlState.volume}
            className="slider rounded-r-full"
            onChange={(lg) =>
              dispatch(
                setControlStates({
                  ...controlState,
                  volume: lg.target.value,
                })
              )
            }
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div
          onClick={() =>
            dispatch(
              setControlStates({
                ...controlState,
                notch: !controlState.notch,
              })
            )
          }
          className={
            "mt-2 backdrop-blur-xl shadow-sm px-2 py-2 rounded-lg flex flex-row flex-center items-center " +
            (controlState.notch
              ? "bg-blue-500 text-white"
              : "bg-white/10 text-black/70")
          }
        >
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 117.3 52"
            style={{
              enableBackground: "new 0 0 117.3 52",
            }}
            xmlSpace="preserve"
            className="w-8 opacity-70"
          >
            <style>{".st2{fill:#4d4b4b}"}</style>
            <path
              d="M93.1 48.3H23.8c-12.2 0-22.1-9.9-22.1-22.1V3c0-.1.1-.2.2-.2h113c.1 0 .2.1.2.2v23.2c0 12.2-9.9 22.1-22 22.1z"
              style={{
                fill: "#666666",
              }}
            />
            <circle
              cx={45.3}
              cy={25.6}
              r={16.4}
              style={{
                fill: "#777777",
              }}
            />
            <circle className="st2" cx={45.3} cy={25.4} r={9.4} />
            <circle className="st2" cx={72.3} cy={25.3} r={2.9} />
            <circle
              cx={84.8}
              cy={25.3}
              r={2.9}
              style={{
                fill: "#939393",
              }}
            />
          </svg>
          <h1 className="ml-1">Notch</h1>
        </div>
      </div>
    </motion.div>
  );
}

export default ControlCenter;
