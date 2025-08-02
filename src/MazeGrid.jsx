import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function MazeGrid() {
  let maze = [
    ["wall", "wall", "wall", "wall", "wall"],
    ["start", "path", "path", "wall", "wall"],
    ["wall", "path", "path", "wall", "wall"],
    ["wall", "wall", "path", "path", "end"],
  ];
  return (
    <>
      <div className="row">
        <div className={"cell"}></div>
      </div>
    </>
  );
}

export default MazeGrid;
