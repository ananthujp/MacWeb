import { FingerPrintIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

function Boot({ handle, state }) {
  const [load, setLoad] = useState(null);
  const handleBoot = (i, x) => {
    i === 0 && setLoad(" w-0");
    i === 0 && !handle.active && handle.enter();
    setTimeout(() => {
      setLoad([" w-8", " w-56", " w-60", " w-60", " w-60"][i]);
      i !== 5 && handleBoot(i + 1);
    }, 600);
    i === 4 && state("login");
  };
  return (
    <div className="w-full h-full bg-black flex flex-col items-center justify-center text-white">
      {load ? (
        <>
          <svg
            className="w-16"
            viewBox="0 0 256 315"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            fill="currentcolor"
          >
            <path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615-.35 1.116-6.599 22.563-21.757 44.716-13.104 19.153-26.705 38.235-48.13 38.63-21.05.388-27.82-12.483-51.888-12.483-24.061 0-31.582 12.088-51.51 12.871-20.68.783-36.428-20.71-49.64-39.793-27-39.033-47.633-110.3-19.928-158.406 13.763-23.89 38.36-39.017 65.056-39.405 20.307-.387 39.475 13.662 51.889 13.662 12.406 0 35.699-16.895 60.186-14.414 10.25.427 39.026 4.14 57.503 31.186-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199-15.826.636-34.962 10.546-46.314 23.828-10.173 11.763-19.082 30.589-16.678 48.633 17.64 1.365 35.66-8.964 46.64-22.262" />
          </svg>
          <div className="flex items-start h-1.5 w-60 bg-white/60 mt-20 rounded-full overflow-hidden">
            <div
              className={"h-1.5 transition-all duration-700 bg-white" + load}
            ></div>
          </div>
        </>
      ) : (
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleBoot(0)}
        >
          <FingerPrintIcon className="w-8 mb-2" />
          <div>Power Up</div>
        </div>
      )}
    </div>
  );
}

export default Boot;
