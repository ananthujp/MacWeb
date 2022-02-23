import { XIcon } from "@heroicons/react/outline";
import React, { useEffect, useRef, useState } from "react";
const Canvas = (props) => {
  const canvasRef = useRef(null);
  function cycle(num1, num2) {
    return ((num1 % num2) + num2) % num2;
  }
  function random(num1, num2) {
    var max = Math.max(num1, num2);
    var min = Math.min(num1, num2);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useEffect(() => {
    const el = canvasRef.current;
    const ctx = el.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const pi = Math.PI;
    const points = 12;
    const radius = 15 * dpr;
    const h = 60 * dpr;
    const w = 60 * dpr;
    const center = {
      x: (w / 2) * dpr,
      y: (h / 2) * dpr,
    };
    const circles = [];
    const rangeMin = 5;
    const rangeMax = 10;
    let tick = 0;
    const gradient1 = ctx.createLinearGradient(0, 0, w, 0);
    gradient1.addColorStop(0, "#96fbc4");
    gradient1.addColorStop(1, "#f9f586");

    const gradient2 = ctx.createLinearGradient(0, 0, w, 0);
    gradient2.addColorStop(0, "#48c6ef");
    gradient2.addColorStop(1, "#6f86d6");

    const gradient3 = ctx.createLinearGradient(0, 0, w, 0);
    gradient3.addColorStop(0, "#9795f0");
    gradient3.addColorStop(1, "#9be15d");

    const gradient4 = ctx.createLinearGradient(0, 0, w, 0);
    gradient4.addColorStop(0, "#f6d365");
    gradient4.addColorStop(1, "#fda085");

    const gradients = [gradient1, gradient2, gradient3, gradient4];

    ctx.scale(dpr, dpr);

    el.width = w * dpr;
    el.height = h * dpr;
    el.style.width = w + "px";
    el.style.height = h + "px";

    for (var idx = 0; idx <= gradients.length - 1; idx++) {
      let swingpoints = [];
      let radian = 0;

      for (var i = 0; i < points; i++) {
        radian = ((pi * 2) / points) * i;
        var ptX = center.x + radius * Math.cos(radian);
        var ptY = center.y + radius * Math.sin(radian);

        swingpoints.push({
          x: ptX,
          y: ptY,
          radian: radian,
          range: random(rangeMin, rangeMax),
          phase: 0,
        });
      }

      circles.push(swingpoints);
    }
    function drawCurve(pts, fillStyle) {
      ctx.fillStyle = fillStyle;
      ctx.beginPath();
      ctx.moveTo(
        (pts[cycle(-1, points)].x + pts[0].x) / 2,
        (pts[cycle(-1, points)].y + pts[0].y) / 2
      );
      for (var i = 0; i < pts.length; i++) {
        ctx.quadraticCurveTo(
          pts[i].x,
          pts[i].y,
          (pts[i].x + pts[cycle(i + 1, points)].x) / 2,
          (pts[i].y + pts[cycle(i + 1, points)].y) / 2
        );
      }

      ctx.closePath();
      ctx.fill();
    }

    function swingCircle() {
      ctx.clearRect(0, 0, w * dpr, h * dpr);

      ctx.globalAlpha = 1;
      // ctx.globalCompositeOperation = 'source-over';
      ctx.globalCompositeOperation = "screen";

      for (let k = 0; k < circles.length; k++) {
        let swingpoints = circles[k];

        for (var i = 0; i < swingpoints.length; i++) {
          swingpoints[i].phase += random(1, 10) * -0.01;

          let phase = 4 * Math.sin(tick / 65);

          var r =
            radius +
            swingpoints[i].range * phase * Math.sin(swingpoints[i].phase) -
            rangeMax;

          swingpoints[i].radian += pi / 360;

          var ptX = center.x + r * Math.cos(swingpoints[i].radian);
          var ptY = center.y + r * Math.sin(swingpoints[i].radian);

          swingpoints[i] = {
            x: ptX,
            y: ptY,
            radian: swingpoints[i].radian,
            range: swingpoints[i].range,
            phase: swingpoints[i].phase,
          };
        }

        const fill = gradients[k];

        drawCurve(swingpoints, fill);
      }

      tick++;

      requestAnimationFrame(swingCircle);
    }
    requestAnimationFrame(swingCircle);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};
const commands = [
  { txt: "", t: 1 },
  { txt: "Hey", t: 3 },
  { txt: "Good Morning!", t: 3 },
  { txt: "I'm Siri", t: 3 },
  { txt: "What can I help you with?", t: 3 },
];
function Siri({ hide }) {
  const [siri, setSiri] = useState([""]);
  const handleCommands = (i) => {
    setSiri(siri.concat(commands[i].txt));
    i !== commands.length - 1 &&
      setTimeout(() => handleCommands(i + 1), commands[i].t * 1000);
  };
  useEffect(() => {
    handleCommands(0);
  }, []);
  return (
    <div className="absolute bg-black/30 rounded-md flex flex-col items-center justify-center backdrop-blur-lg w-64 h-auto py-4 right-8 top-8">
      <div
        onClick={() => hide(false)}
        className="absolute -top-0.5 -left-0.5 text-black bg-white/80 p-0.5 rounded-full"
      >
        <XIcon className="w-3" />
      </div>
      {siri?.map((dc, i) => (
        <h1
          key={`siri.key${i}`}
          className="text-white w-full pl-3 text-xs text-left font-semibold my-1"
        >
          {dc}
        </h1>
      ))}
      <div className="rounded-full my-2 overflow-hidden shadow-lg bg-black/30">
        <Canvas />
      </div>
    </div>
  );
}

export default Siri;
