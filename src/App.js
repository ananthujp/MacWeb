import "./App.css";
import Display from "./screens/Display";
import Launchpad from "./screens/Launchpad";
import Login from "./screens/Login";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useSelector } from "react-redux";
import { selectHandle } from "./reducer/appSlice";
function App() {
  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle}>
      <div className="w-screen h-screen">
        <Display handle={handle} />

        {/* <Login/> */}
        {/* <Launchpad /> */}
      </div>
    </FullScreen>
  );
}

export default App;
