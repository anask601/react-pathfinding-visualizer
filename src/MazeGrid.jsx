import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function MazeGrid() {
  let initialMaze = [
    ["wall", "wall", "wall", "wall", "wall"],
    ["start", "path", "path", "wall", "wall"],
    ["wall", "path", "path", "wall", "wall"],
    ["wall", "wall", "path", "path", "end"],
  ];

  const [maze, setMaze] = useState(initialMaze);

  function generateMaze(height, width) {
    let matrix = [];
    for (let i = 0; i < height; i++) {
      let row = [];
      for (let j = 0; j < width; j++) {
        let cell = Math.random();
        if (cell < 0.5) {
          row.push("wall");
        } else {
          row.push("path");
        }
      }
      matrix.push(row);
    }
    matrix[1][0] = "start";
    matrix[height - 2][width - 1] = "end";
    setMaze(matrix);
    console.log(matrix);
    console.log("Maze generated!");
  }

  return (
    <div className="maze-grid">
      <button className="maze-button" onClick={() => generateMaze(5, 6)}>
        Refresh Maze
      </button>
      <div className={"maze"}>
        {maze.map((row, rowIndex) => (
          <div className="row">
            {row.map((cell, cellIndex) => (
              <div className={`cell ${cell}`}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MazeGrid;
