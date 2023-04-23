import "./App.css";
import Score from "./score/Score";
import Maze from "./maze/Maze";

function App() {
  const rows = 5;
  const columns = 10;
  const cellSize = 120;

  const cssVariables = {
    "--rows": rows,
    "--columns": columns,
    "--cellSize": cellSize + "px",
  };

  return (
    <div className="App" style={cssVariables}>
      <Score></Score>
      <Maze rows={rows} columns={columns}></Maze>
    </div>
  );
}

export default App;
