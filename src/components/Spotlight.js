import React, { useState, useEffect } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import useSlice from "../hooks/appSlice";
import { Icons } from "../Data/appData";
function Spotlight({ openW }) {
  const [search, setSearch] = useState(null);
  const [results, setResults] = useState(null);
  useEffect(() => {
    const matches =
      search?.length > 1 &&
      Icons.filter((element) => {
        if (element.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
          return true;
        }
      });
    const web = [{ name: search }, { name: search }];
    setResults([web, matches]);
  }, [search]);
  const { controlStates, setState } = useSlice();
  return (
    <div
      className={
        "absolute flex z-50 flex-col top-1/4 " +
        (controlStates.spotlight ? " block" : " hidden")
      }
    >
      <div
        className={
          "flex flex-row px-3 py-3 bg-white/40 backdrop-blur-xl shadow-xl " +
          (search ? "rounded-t-xl " : "rounded-xl ")
        }
      >
        <SearchIcon className="w-6 text-gray-700 mr-3" />
        <input
          autoFocus={true}
          type="text"
          placeholder="Spotlight Search"
          onChange={(lg) => setSearch(lg.target.value)}
          className="outline-none bg-transparent pr-36 text-gray-700 text-xl placeholder:text-xl"
        />
      </div>

      {search && (
        <div className="bg-white/40 cursor-default backdrop-blur-xl shadow-xl border-t border-gray-400/40 py-2 px-1 rounded-b-xl">
          {results.map((item, index) => (
            <div
              key={`spotlist.main${index}`}
              className={
                index + 1 !== results.length
                  ? "pb-2 mb-2 border-b border-gray-400/40"
                  : ""
              }
            >
              {item.length > 0 &&
                item.map((docs, index) => (
                  <div
                    onClick={(e) => {
                      docs?.name === "Launchpad" || docs?.name === "Siri"
                        ? openW([{ name: docs?.name, status: docs?.name }])
                        : openW([
                            {
                              name:
                                docs?.name === search
                                  ? Icons[6].name
                                  : docs?.name,
                              window: docs?.window
                                ? docs.window
                                : Icons[6].window,
                              status: "open",
                            },
                          ]);
                      setState({ ...controlStates, spotlight: false });
                    }}
                    key={`spotlist.sub${index}`}
                    className="relative text-sm px-2 py-0.5 flex flex-row items-center hover:text-white rounded-md hover:bg-blue-500"
                  >
                    <h1 className="w-5 mr-1">
                      {docs?.icon ? docs?.icon : Icons[6].icon}
                    </h1>
                    <h1>{docs?.name}</h1>
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Spotlight;
