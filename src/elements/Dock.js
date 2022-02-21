import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import useRaf from "@rooks/use-raf";
import { Icons } from "../Data/appData";
function Component({ openW }) {
  const mouseX = useMotionValue(null);
  const DocItem = ({ src, text, mouseX, wdow }) => {
    const [appload, setLoad] = useState(false);
    const baseWidth = 50;
    const distanceLimit = baseWidth * 6;
    const beyondTheDistanceLimit = distanceLimit + 1;
    const distanceInput = [
      -distanceLimit,
      -distanceLimit / 1.25,
      -distanceLimit / 2,
      0,
      distanceLimit / 2,
      distanceLimit / 1.25,
      distanceLimit,
    ];
    const widthOutput = [
      baseWidth,
      baseWidth * 1.3,
      baseWidth * 1.7,
      baseWidth * 2,
      baseWidth * 1.7,
      baseWidth * 1.3,
      baseWidth,
    ];
    const distance = useMotionValue(beyondTheDistanceLimit);
    const width = useSpring(
      useTransform(distance, distanceInput, widthOutput),
      {
        damping: 5000,
        stiffness: 200000,
      }
    );

    const ref = useRef();

    useRaf(() => {
      const el = ref.current;
      const mouseXVal = mouseX.get();
      if (el && mouseXVal !== null) {
        const rect = el.getBoundingClientRect();

        // get the x coordinate of the img DOMElement's center
        // the left x coordinate plus the half of the width
        const imgCenterX = rect.left + rect.width / 2;

        // difference between the x coordinate value of the mouse pointer
        // and the img center x coordinate value
        const distanceDelta = mouseXVal - imgCenterX;
        distance.set(distanceDelta);
        return;
      }

      distance.set(beyondTheDistanceLimit);
    }, true);
    return (
      <div
        onClick={(e) => {
          text === "Launchpad"
            ? openW([{ name: text, status: "launchpad" }])
            : openW([{ name: text, window: wdow, status: "open" }]);
          setLoad(true);
          setTimeout(() => setLoad(false), 1600);
        }}
        className={
          "group flex flex-col items-center " +
          (appload ? "animate-bounce" : "")
        }
      >
        <p className="hidden group-hover:block  text-black text-sm absolute -mt-8 px-3 py-1 bg-gray-300 bg-opacity-80 rounded-md">
          {text}
        </p>
        <motion.div
          data-context="dock"
          style={{ width }}
          className="h-auto "
          ref={ref}
          data-tooltip-target="tooltip-default"
        >
          {src}
        </motion.div>
        <div className="hidden w-1 h-1 rounded-full bg-white"></div>
      </div>
    );
  };
  return (
    <div
      data-context="dock"
      onMouseMove={(e) => mouseX.set(e.nativeEvent.x)}
      onMouseLeave={() => mouseX.set(null)}
      className="absolute bottom-2 backdrop-blur-xl
  bg-white/30 max-h-14 flex flex-row p-1 rounded-2xl items-end justify-center"
    >
      {Icons.map((items, index) => (
        <DocItem
          key={`dock.icon.${index}`}
          mouseX={mouseX}
          src={items.icon}
          wdow={items.window}
          text={items.name}
        />
      ))}
    </div>
  );
}

const Dock = React.memo(Component);
export default Dock;
