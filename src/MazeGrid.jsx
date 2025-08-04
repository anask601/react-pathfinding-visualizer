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
    ["wall", "wall", "path", "path", "wall"],
  ];

  const [maze, setMaze] = useState(initialMaze);

  function generateMaze(height, width) {
    let matrix = [];
    for (let i = 0; i < height; i++) {
      let row = [];
      for (let j = 0; j < width; j++) {
        let cell = Math.random();
        row.push("wall");
      }
      matrix.push(row);
    }

    const dirs = [
      [0, 1], // right
      [1, 0], // down
      [0, -1], // left
      [-1, 0], // up
    ];

    function isCellValid(x, y) {
      return (
        y >= 0 && x >= 0 && x < width && y < height && matrix[y][x] === "wall"
      );
    }

    const curvePath = (x, y) => {
      matrix[y][x] = "path";

      const directions = dirs.sort(() => Math.random() - 0.5);

      for (let [dx, dy] of directions) {
        const nx = x + dx * 2;
        const ny = y + dy * 2;
        if (isCellValid(nx, ny)) {
          matrix[y + dy][x + dx] = "path";
          curvePath(nx, ny);
        }
      }
    };

    curvePath(1, 1);

    matrix[1][0] = "start";
    matrix[height - 2][width - 1] = "end";
    setMaze(matrix);
    console.log(matrix);
    console.log("Maze generated!");
  }

  return (
    <div className="maze-grid">
      <button className="maze-button" onClick={() => generateMaze(10, 10)}>
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
