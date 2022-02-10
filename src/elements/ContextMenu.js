import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
function ContextMenu({ Items, branch, show, options }) {
  const [vis, setVis] = useState(false);
  return (
    <div
      className={
        "absolute top-0 left-0 text-black cursor-default backdrop-blur-3xl bg-white/50 text-sm py-0.5 px-1.5 w-auto shadow-lg text-left flex flex-col rounded-md " +
        (branch && " ml-56  bg-white/90 z-10") +
        (show ? " block" : " hidden")
      }
      style={
        branch
          ? null
          : {
              transform: `translate(${
                window.innerWidth - options.pageX < 260
                  ? options.pageX - 260
                  : options.pageX
              }px, ${
                window.innerHeight - options.pageY < 300
                  ? options.pageY - 224
                  : options.pageY
              }px)`,
            }
      }
    >
      {Items.map((items, index) => (
        <div
          key={`ctx.${index}`}
          className={
            "mt-1 pb-1 border-b border-gray-400 " +
            (index + 1 !== items.length && " border-b-0")
          }
        >
          {items.map((item, i) => {
            return (
              <div
                onMouseEnter={() =>
                  item.shade && setVis(`ctx${index}.sub.${i}.${item.name}`)
                }
                onMouseLeave={() => item.shade && setVis(false)}
                onClick={() => !item.shade && console.log(item.name)}
                key={`ctx${index}.sub.${i}`}
                className="relative px-2 py-0.5 flex flex-row justify-between items-center hover:text-white rounded-md hover:bg-blue-500 "
              >
                <div className={"whitespace-nowrap " + (!branch && "mr-9")}>
                  {item.name}
                </div>
                {item.shade && (
                  <div className="w-4">
                    <ChevronRightIcon />
                  </div>
                )}
                {item.shade && vis === `ctx${index}.sub.${i}.${item.name}` ? (
                  <ContextMenu branch Items={item.shadeItems} show={true} />
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default ContextMenu;
