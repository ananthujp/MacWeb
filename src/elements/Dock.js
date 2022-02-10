import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import useRaf from "@rooks/use-raf";
import useSlice from "../hooks/appSlice";
const DocItem = ({ src, text, mouseX }) => {
  const { showLaunchpad } = useSlice();
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
  const width = useSpring(useTransform(distance, distanceInput, widthOutput), {
    damping: 25,
    stiffness: 250,
  });

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
    <div className="group flex flex-col items-center">
      <p className="hidden group-hover:block  text-black text-sm absolute -mt-8 px-3 py-1 bg-gray-300 bg-opacity-80 rounded-md">
        {text}
      </p>
      <motion.img
        onClick={() => showLaunchpad(true)}
        src={src}
        alt=""
        style={{ width }}
        className="h-auto "
        ref={ref}
        data-tooltip-target="tooltip-default"
      />
      <div className="hidden w-1 h-1 rounded-full bg-white"></div>
    </div>
  );
};
function Dock() {
  const Icons = [
    {
      name: "Finder",
      icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png",
    },
    {
      name: "Siri",
      icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ff3bafbac60495771_siri.png",
    },
    {
      name: "Launchpad",
      icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853943597517f128b9b4_launchpad.png",
    },
    {
      name: "Contacts",
      icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853743597518c528b9b3_contacts.png",
    },
    {
      name: "Notes",
      icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c849ec3735b52cef9_notes.png",
    },
    {
      name: "Reminders",
      icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853d44d99641ce69afeb_reminders.png",
    },
    {
      name: "Photos",
      icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c55558a2e1192ee09_photos.png",
    },
    {
      name: "Facetime",
      icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708537f18e2cb27247c904_facetime.png",
    },
  ];
  const mouseX = useMotionValue(null);

  return (
    <div
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
          text={items.name}
        />
      ))}
    </div>
  );
}

export default Dock;
