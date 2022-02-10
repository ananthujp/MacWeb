import React from "react";
import {
  WifiIcon,
  ScaleIcon,
  SunIcon,
  VolumeUpIcon,
  StatusOnlineIcon,
  DocumentDuplicateIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import { motion } from "framer-motion";
import Spinner from "./Spinner";
import { MoonIcon } from "@heroicons/react/solid";
import useSlice from "../hooks/appSlice";
const Icon = ({ n, state }) => {
  const list = [
    <WifiIcon className="w-5" />,
    <ScaleIcon className="w-5" />,
    <StatusOnlineIcon className="w-5" />,
    <MoonIcon className="w-5" />,
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
function ControlCenter() {
  const { controlStates, setState } = useSlice();
  const handleButtons = (n) => {
    switch (n) {
      case 0:
        setState({
          ...controlStates,
          wifi: 1,
          wifiState: controlStates.wifi ? "Turning Off.." : "Turning On..",
        });
        setTimeout(
          () =>
            setState({
              ...controlStates,
              wifi: !controlStates.wifi,
              wifiState: controlStates.wifi ? "Off" : "On",
            }),
          1000
        );
        break;
      case 1:
        setState({
          ...controlStates,
          bt: 1,
          btState: controlStates.bt ? "Turning Off.." : "Turning On..",
        });
        setTimeout(
          () =>
            setState({
              ...controlStates,
              bt: !controlStates.bt,
              btState: controlStates.bt ? "Off" : "On",
            }),
          1000
        );
        break;
      case 2:
        setState({
          ...controlStates,
          ad: 1,
          adState: controlStates.ad ? "Turning Off.." : "Turning On..",
        });
        setTimeout(
          () =>
            setState({
              ...controlStates,
              ad: !controlStates.ad,
              adState: controlStates.ad ? "Off" : "On",
            }),
          1000
        );
        break;
      default:
    }
  };
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="absolute top-7  text-sm right-2 flex flex-col bg-white/30 backdrop-blur-xl shadow-sm p-2 rounded-xl"
    >
      <div className="flex flex-row">
        <div className="flex flex-col justify-between bg-white/10 backdrop-blur-xl mr-1 shadow-sm p-2 rounded-xl">
          <div
            onClick={() => handleButtons(0)}
            className="flex flex-row group justify-between"
          >
            <div className="flex flex-row w-32">
              <Icon n={0} state={controlStates.wifi} />
              <div>
                <h1>Wi-Fi</h1>
                <h1 className="text-xs">{controlStates.wifiState}</h1>
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
              <Icon n={1} state={controlStates.bt} />
              <div>
                <h1>Bluetooth</h1>
                <h1 className="text-xs">{controlStates.btState}</h1>
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
              <Icon n={2} state={controlStates.ad} />
              <div>
                <h1>AirDrop</h1>
                <h1 className="text-xs">{controlStates.adState}</h1>
              </div>
            </div>
            <div className="w-4 flex items-center">
              <ChevronRightIcon className="hidden w-4 group-hover:block" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex fle-row items-center bg-white/10 backdrop-blur-xl ml-1 mb-1 shadow-sm px-2 py-4 rounded-xl">
            <Icon n={3} state={0} />
            <h1>Focus</h1>
          </div>
          <div className="flex fle-row items-center bg-white/10 backdrop-blur-xl ml-1 mb-1 shadow-sm px-2 py-4 rounded-xl">
            <div className=" flex justify-center items-center mr-2 bg-gray-500/30 rounded-full w-8 h-8 text-black">
              <DocumentDuplicateIcon className="w-5" />
            </div>
            <h1 className="w-20">Screen Mirroring</h1>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col bg-white/10 mt-2 backdrop-blur-xl
shadow-sm px-2 py-2 rounded-xl w-full"
      >
        <div className="mb-1">Display</div>
        <div className="flex flex-row items-center group">
          <div className="w-5 h-[25px] flex pl-1 items-center rounded-l-full transition-all bg-gray-50/60 group-hover:bg-gray-50/90 text-gray-800">
            <SunIcon />
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={controlStates.brightness}
            className="slider rounded-r-full"
            onChange={(lg) =>
              setState({ ...controlStates, brightness: lg.target.value })
            }
          />
        </div>
      </div>
      <div
        className="bg-white/10 mt-2 backdrop-blur-xl
shadow-sm px-2 py-2 rounded-xl"
      >
        <div className="mb-1">Sound</div>
        <div className="flex flex-row items-center group">
          <div className="w-5 h-[25px] flex pl-1 items-center rounded-l-full transition-all bg-gray-50/60 group-hover:bg-gray-50/90 text-gray-800">
            <VolumeUpIcon />
          </div>

          <input
            type="range"
            min="1"
            max="100"
            className="slider rounded-r-full"
            value={controlStates.volume}
            onChange={(lg) =>
              setState({ ...controlStates, volume: lg.target.value })
            }
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ControlCenter;
