import React, { useState, useEffect } from "react";
import { SearchIcon } from "@heroicons/react/outline";
function Spotlight() {
  const [search, setSearch] = useState(null);
  const [results, setResults] = useState(null);
  const appList = [
    { name: "Facetime" },
    { name: "Mail" },
    { name: "Mail2" },
    { name: "Chrome" },
  ];
  useEffect(() => {
    const matches =
      search?.length > 2 &&
      appList.filter((element) => {
        if (element.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
          return true;
        }
      });
    const web = [{ name: search }, { name: search }];
    setResults([web, matches]);
  }, [search]);

  return (
    <div className="absolute flex flex-col top-1/4">
      <div
        className={
          "flex flex-row px-3 py-3 bg-white/40 backdrop-blur-xl shadow-xl " +
          (search ? "rounded-t-xl " : "rounded-xl ")
        }
      >
        <SearchIcon className="w-6 text-gray-700 mr-3" />
        <input
          type="text"
          placeholder="Spotlight Search"
          onChange={(lg) => setSearch(lg.target.value)}
          className="outline-none bg-transparent pr-36 text-gray-700 text-xl placeholder:text-xl"
        />
      </div>

      {search && (
        <div className="bg-white/40 backdrop-blur-xl shadow-xl border-t border-gray-400/40 py-2 px-3 rounded-b-xl">
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
                    key={`spotlist.sub${index}`}
                    className="relative text-sm px-2 py-0.5 flex flex-row justify-between items-center hover:text-white rounded-md hover:bg-blue-500"
                  >
                    {docs?.name}
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
