import React, { useState } from "react";

function Calculator() {
  const [disp, setDisp] = useState(0);
  const [state, setNum] = useState({
    num: 0,
    action: null,
    zeroNxt: false,
    dot: false,
  });
  const handleCalc = (n) => {
    state.zeroNxt
      ? setDisp(disp * 0 + n)
      : setDisp(state.dot ? disp + n / 10 : disp * 10 + n);
    state.zeroNxt && setNum({ ...state, zeroNxt: false });
  };
  const handleResult = () => {
    switch (state.action) {
      case "division":
        setDisp(state.num / disp);
        break;
      case "multiply":
        setDisp(state.num * disp);
        break;
      case "subtract":
        setDisp(state.num - disp);
        break;
      case "addition":
        setDisp(state.num + disp);
        break;
      default:
    }

    setNum({ ...state, num: disp, zeroNxt: true, dot: false });
  };
  return (
    <div className="flex flex-col w-full h-full cursor-default">
      <div className="flex flex-col justify-end py-2 px-4 windowHandle bg-black/60 backdrop-blur-xl h-24 w-full ">
        {/* Section Left */}
        <h1 className="text-right text-white text-4xl font-thin">{disp}</h1>
      </div>
      <div className="flex flex-col justify-between h-full bg-black/60 backdrop-blur-xl">
        <div className="flex flex-row w-full justify-between">
          <div
            onClick={() => setDisp(0) && setNum({ ...state, dot: false })}
            className="mr-0.5 mb-0.5  text-center text-white bg-gray-300/10 py-3 w-full"
          >
            {disp ? "C" : "AC"}
          </div>
          <div
            onClick={() => setDisp(disp * -1)}
            className="mr-0.5 mb-0.5  text-center text-white bg-gray-300/10 py-3 w-full"
          >
            +/-
          </div>
          <div
            onClick={() => setDisp(disp * 0.01)}
            className="mr-0.5 mb-0.5  text-center text-white bg-gray-300/10 py-3 w-full"
          >
            %
          </div>
          <div
            onClick={() =>
              setNum({
                num: disp,
                action: "division",
                zeroNxt: true,
                dot: false,
              })
            }
            className="mb-0.5 text-center text-white active:bg-orange-500 bg-orange-400 py-3 w-full"
          >
            &#xF7;
          </div>
        </div>
        <div className="flex flex-row w-full justify-between">
          <div
            onClick={() => handleCalc(7)}
            className="mr-0.5 mb-0.5 text-xl text-center text-white active:bg-gray-100/40 bg-gray-100/30 py-2 w-full"
          >
            7
          </div>
          <div
            onClick={() => handleCalc(8)}
            className="mr-0.5 mb-0.5 text-xl text-center text-white active:bg-gray-100/40 bg-gray-100/30 py-2 w-full"
          >
            8
          </div>
          <div
            onClick={() => handleCalc(9)}
            className="mr-0.5 mb-0.5 text-xl text-center text-white active:bg-gray-100/40 bg-gray-100/30 py-2 w-full"
          >
            9
          </div>
          <div
            onClick={() =>
              setNum({
                num: disp,
                action: "multiply",
                zeroNxt: true,
                dot: false,
              })
            }
            className="mb-0.5 text-xl text-center text-white active:bg-orange-500 bg-orange-400 py-2 w-full"
          >
            X
          </div>
        </div>
        <div className="flex flex-row w-full justify-between">
          <div
            onClick={() => handleCalc(4)}
            className="mr-0.5 mb-0.5 text-xl text-center text-white active:bg-gray-100/40 bg-gray-100/30 py-2 w-full"
          >
            4
          </div>
          <div
            onClick={() => handleCalc(5)}
            className="mr-0.5 mb-0.5 text-xl text-center text-white active:bg-gray-100/40 bg-gray-100/30 py-2 w-full"
          >
            5
          </div>
          <div
            onClick={() => handleCalc(6)}
            className="mr-0.5 mb-0.5 text-xl text-center text-white active:bg-gray-100/40 bg-gray-100/30 py-2 w-full"
          >
            6
          </div>
          <div
            onClick={() =>
              setNum({
                num: disp,
                action: "subtract",
                zeroNxt: true,
                dot: false,
              })
            }
            className="mb-0.5 text-xl text-center text-white active:bg-orange-500 bg-orange-400 py-2 w-full"
          >
            -
          </div>
        </div>
        <div className="flex flex-row w-full justify-between">
          <div
            onClick={() => handleCalc(1)}
            className="mr-0.5 mb-0.5 text-xl text-center text-white active:bg-gray-100/40 bg-gray-100/30 py-2 w-full"
          >
            1
          </div>
          <div
            onClick={() => handleCalc(2)}
            className="mr-0.5 mb-0.5 text-xl text-center text-white active:bg-gray-100/40 bg-gray-100/30 py-2 w-full"
          >
            2
          </div>
          <div
            onClick={() => handleCalc(3)}
            className="mr-0.5 mb-0.5 text-xl text-center text-white active:bg-gray-100/40 bg-gray-100/30 py-2 w-full"
          >
            3
          </div>
          <div
            onClick={() =>
              setNum({
                num: disp,
                action: "addition",
                zeroNxt: true,
                dot: false,
              })
            }
            className="mb-0.5 text-xl text-center text-white active:bg-orange-500 bg-orange-400 py-2 w-full"
          >
            +
          </div>
        </div>
        <div className="flex flex-row w-full justify-between">
          <div
            onClick={() => handleCalc(0)}
            className="mr-0.5 w-96 px-5 -ml-1  text-xl text-center text-white active:bg-gray-100/40 bg-gray-100/30 py-2 "
          >
            0
          </div>
          <div
            onClick={() => setNum({ ...state, dot: true })}
            className="mr-0.5  text-xl text-center text-white active:bg-gray-100/40 bg-gray-100/30 py-2 w-full"
          >
            .
          </div>
          <div
            onClick={() => handleResult()}
            className=" text-xl text-center text-white active:bg-orange-500 bg-orange-400 py-2 w-full"
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
