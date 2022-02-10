import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
const Items = [
  [{ name: "New Folder" }],
  [{ name: "Get Info" }, { name: "Change Desktop Background.." }],
  [
    { name: "Use Stacks" },
    {
      name: "Sort By",
      shade: true,
      shadeItems: [[{ name: "None" }], [{ name: "Snap to Grid" }]],
    },
    { name: "Clean Up" },
    {
      name: "Clean Up By",
      shade: true,
      shadeItems: [
        [
          { name: "Name" },
          { name: "Kind" },
          { name: "Date Modified" },
          { name: "Date Created" },
        ],
      ],
    },
    { name: "Show View Options" },
  ],
];
const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  //const [user,setUser]=useState(null);
  const [launchpad, showLaunchpad] = useState(false);
  const [context, setContext] = useState({
    pageX: 0,
    pageY: 0,
    show: false,
    items: Items,
  });
  const [controlStates, setState] = useState({
    show: false,
    wifi: false,
    wifiState: "Off",
    bt: false,
    btState: "Off",
    ad: false,
    adState: "Off",
    brightness: 100,
    volume: 0,
    spotlight: false,
  });
  // useEffect(() => {
  //   console.log(context.show);
  // }, [context]);

  const memoedValue = useMemo(
    () => ({
      context,
      setContext,
      launchpad,
      showLaunchpad,
      controlStates,
      setState,
    }),
    [context, launchpad, controlStates]
  );

  return (
    <AppContext.Provider value={memoedValue}>{children}</AppContext.Provider>
  );
};

export default function useSlice() {
  return useContext(AppContext);
}
