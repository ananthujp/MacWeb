import React from "react";
import { motion } from "framer-motion";
function Spinner() {
  const color = "origin-[60%_-60%] w-0.5 h-1.5 bg-gray-800";
  return (
    <div className="relative mr-0.5 mt-1.5">
      <motion.div
        animate={{
          opacity: [0, 1],
          transition: { duration: 1, repeat: Infinity, delay: 0 },
        }}
        className={"absolute rounded-lg left-1/2 top-1/2 " + color}
      ></motion.div>
      <motion.div
        animate={{
          opacity: [0, 1],
          transition: { duration: 1, repeat: Infinity, delay: 1 / 9 },
        }}
        className={"absolute rounded-lg left-1/2 rotate-45 top-1/2 " + color}
      ></motion.div>
      <motion.div
        animate={{
          opacity: [0, 1],
          transition: { duration: 1, repeat: Infinity, delay: 2 / 9 },
        }}
        className={"absolute rounded-lg left-1/2 rotate-90 top-1/2 " + color}
      ></motion.div>
      <motion.div
        animate={{
          opacity: [0, 1],
          transition: { duration: 1, repeat: Infinity, delay: 3 / 9 },
        }}
        className={
          "absolute rounded-lg left-1/2 rotate-[135deg] top-1/2 " + color
        }
      ></motion.div>
      <motion.div
        animate={{
          opacity: [0, 1],
          transition: { duration: 1, repeat: Infinity, delay: 4 / 9 },
        }}
        className={"absolute rounded-lg left-1/2 rotate-180 top-1/2 " + color}
      ></motion.div>
      <motion.div
        animate={{
          opacity: [0, 1],
          transition: { duration: 1, repeat: Infinity, delay: 5 / 9 },
        }}
        className={
          "absolute rounded-lg left-1/2 rotate-[225deg] top-1/2 " + color
        }
      ></motion.div>
      <motion.div
        animate={{
          opacity: [0, 1],
          transition: { duration: 1, repeat: Infinity, delay: 6 / 9 },
        }}
        className={"absolute rounded-lg left-1/2 -rotate-45 top-1/2 " + color}
      ></motion.div>
      <motion.div
        animate={{
          opacity: [0, 1],
          transition: { duration: 1, repeat: Infinity, delay: 7 / 9 },
        }}
        className={"absolute rounded-lg left-1/2 -rotate-90 top-1/2 " + color}
      ></motion.div>
    </div>
  );
}

export default Spinner;
