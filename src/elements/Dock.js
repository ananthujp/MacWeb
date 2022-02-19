import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import useRaf from "@rooks/use-raf";
import { useDispatch, useSelector } from "react-redux";
import { setWindow, selectWindow } from "../reducer/appSlice";
function Component({ openW }) {
  const handleWindow = (text, wdow) => {
    openW([{ name: text }]);
  };
  //const dispatch = useDispatch();

  //const wDows = useSelector(selectWindow);

  // const handledispatch = (text, wdow) => {
  //   dispatch(
  //     setWindow({
  //       windows: wDows
  //         ? wDows.concat([{ name: text, options: wdow }])
  //         : [{ name: text, options: wdow }],
  //     })
  //   );
  // };

  // console.log(wDows);
  const Icons = [
    {
      name: "Finder",
      icon: (
        <img
          alt=""
          src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png"
        />
      ),
      window: { width: 800, height: 600 },
    },

    {
      name: "Launchpad",
      icon: (
        <img
          alt=""
          src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853943597517f128b9b4_launchpad.png"
        />
      ),
      window: { width: 800, height: 600 },
    },

    {
      name: "Notes",
      icon: (
        <img
          alt=""
          src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c849ec3735b52cef9_notes.png"
        />
      ),
      window: { width: 800, height: 600 },
    },
    {
      name: "Calendar",
      icon: (
        <div className="mb-1 ml-1 cursor-default">
          <svg
            width="90%"
            height="90%"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 294.8 294.8"
            style={{
              enableBackground: "new 0 0 294.8 294.8",
            }}
            xmlSpace="preserve"
          >
            <style>
              {".st0{fill:#fff}.st2{font-family:'MyriadPro-Regular'}"}
            </style>
            <path
              className="st0"
              d="M230 294.8H64.8C29 294.8 0 265.8 0 230V64.8C0 29 29 0 64.8 0H230c35.8 0 64.8 29 64.8 64.8V230c0 35.8-29 64.8-64.8 64.8z"
            />
            <path
              d="M229.3 0H65.4C29.3 0 0 29.3 0 65.4V109h294.8V65.4c0-36.1-29.3-65.4-65.5-65.4z"
              style={{
                fill: "#ed6c66",
              }}
            />
            <text
              transform="translate(93.735 81.442)"
              className="st0 st2"
              style={{
                fontFamily: "Charcoal,sans-serif",
                fontSize: "64.0738px",
              }}
            >
              {Date().substring(4, 7).toUpperCase()}
            </text>
            <text
              transform="translate(70.41 244.573)"
              className="st2"
              style={{
                fontFamily: "Charcoal,sans-serif",
                fontSize: "150.0738px",
              }}
            >
              {Date().substring(8, 10)}
            </text>
          </svg>
        </div>
      ),
      window: { width: 800, height: 600 },
    },
    {
      name: "Maps",
      icon: (
        <img
          className="pb-0.5"
          width="90%"
          height="90%"
          alt=""
          src="https://help.apple.com/assets/615272211494760B754BD339/615272221494760B754BD340/en_GB/ebefa50b854ad64af642633738b93d75.png"
        />
      ),
      window: { width: 800, height: 600 },
    },

    {
      name: "Facetime",
      icon: (
        <img
          alt=""
          src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708537f18e2cb27247c904_facetime.png"
        />
      ),
      window: { width: 800, height: 600 },
    },
    {
      name: "Safari",
      icon: (
        <img
          alt=""
          src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ddd826358438eda6d_safari.png"
        />
      ),
      window: { width: 800, height: 600 },
    },
  ];
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
            : openW([{ name: text, status: "open" }]);
          // let obj = wDows?.find((o) => o.name === text);
          // // console.log(obj);
          // !obj && handledispatch(text, wdow);
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
