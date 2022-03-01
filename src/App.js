import "./App.css";
import Login from "./screens/Login";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Display from "./screens/Display";
function App() {
  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle}>
      <div className="w-screen h-screen">
        <Display handle={handle} />

        {/* <Login /> */}
      </div>
    </FullScreen>
  );
}

export default App;
