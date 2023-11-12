import "./App.css";
import Login from "./screens/Login";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Display from "./screens/Display";
import { useState } from "react";
import Boot from "./screens/Boot";
function App() {
  const handle = useFullScreenHandle();
  const [system, setSystem] = useState("boot");
  return (
    <FullScreen handle={handle}>
      <div className="w-screen h-screen">
        {system === "boot" && <Boot state={setSystem} handle={handle} />}
        {system === "login" && <Login state={setSystem} />}
        {system === "system" && (
          <Display handle={handle} systemState={setSystem} />
        )}
      </div>
    </FullScreen>
  );
}

export default App;
