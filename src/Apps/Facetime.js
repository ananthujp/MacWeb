import React from "react";
import { VideoCameraIcon, PaperClipIcon } from "@heroicons/react/solid";
import Webcam from "react-webcam";
const sideBarItems = [
  {
    name: "This Week",
    items: [
      {
        name: "Elon Musk",
        icon: "https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg",
        time: Date().substring(16, 21),
      },
      {
        name: "FaceTime Link",
        icon: "https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg",
        time: Date().substring(4, 10),
      },
      {
        name: "Elon Musk & Mark",
        icon: "https://cdn.vox-cdn.com/thumbor/p0m5yra6t_Iic3gNxptcEYS9-To=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/8911203/Screen_Shot_2017_07_25_at_9.40.24_AM.png",
        time: Date().substring(0, 3),
      },
    ],
  },
  {
    name: "This Month",
    items: [
      {
        name: "FaceTime Link",
        icon: "https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg",
        time: Date().substring(4, 10),
      },
      {
        name: "Elon Musk & Mark",
        icon: "https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg",
        time: Date().substring(0, 3),
      },
    ],
  },
];
function Facetime() {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col bg-black/60 backdrop-blur-xl h-full w-auto ">
        {/* Section Left */}
        <div className="windowHandle  cursor-default  flex items-center pl-3 text-sm font-bold text-gray-800 h-12 max-h-12 bg-trasparent">
          {/* Left Title */}
        </div>
        <div className=" flex flex-col px-1 overflow-y-auto cursor-default">
          <div className="flex flex-row mb-4 justify-around">
            <div className="flex flex-row mx-2 py-1 whitespace-nowrap px-4 bg-gray-500 active:bg-gray-400 text-white text-xs rounded-md">
              <PaperClipIcon className="w-4 h-4 mr-0.5" />
              Create Link
            </div>
            <div className="flex flex-row mx-2 py-1  whitespace-nowrap  px-4 bg-green-500 active:bg-green-400 text-white text-xs rounded-md">
              <VideoCameraIcon className="w-4 h-4 mr-0.5" />
              New FaceTime
            </div>
          </div>
          {sideBarItems.map((item) => (
            <div className="flex px-2 flex-col my-2 text-xs font-semibold text-gray-500">
              <h1>{item.name}</h1>
              {item.items.map((dc) => (
                <div className="flex group mt-2 flex-row justify-between text-md py-1 font-normal ml-1 rounded-md">
                  <div className="flex flex-row">
                    <img
                      alt=""
                      src={dc.icon}
                      className="w-12 h-12 object-cover rounded-full"
                    ></img>
                    <div className="flex flex-col ml-2 justify-center border-b border-gray-400/20 w-44">
                      <h1 className="text-white font-semibold">{dc.name}</h1>
                      <div className="flex flex-row">
                        <VideoCameraIcon className="w-3 h-4" />
                        &nbsp; Facetime &nbsp;
                        {dc.time}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center w-8 -ml-8 mr-4">
                    <div className="flex-row items-center hidden group-hover:flex">
                      <div className="w-4 h-4 mr-1 rounded-full text-center bg-gray-200/40 text-gray-800">
                        i
                      </div>
                      <VideoCameraIcon className="w-6 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="windowHandle flex flex-col bg-gray-900 w-full h-full ">
        <Webcam className="w-full overflow-auto" />
      </div>
    </div>
  );
}

export default Facetime;
