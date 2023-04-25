import Cell from "../cell/Cell";
import "./Maze.css";

function Maze(props) {
  const rows = props.rows;
  const columns = props.columns;

  const cellsIds = [...Array(rows * columns).keys()];
  const cells = [];
  for (let id = 0; id < cellsIds.length; id++) {
    cells[id] = 0;
  }

  let emptyCells = [];
  for (let id = 0; id < cellsIds.length; id++) {
    if (cells[id] === 0) {
      emptyCells.push(id);
    }
  }
  if (emptyCells.length !== 0) {
    let randomIndex = Math.floor(Math.random() * emptyCells.length);
    let appleId = emptyCells[randomIndex];
    cells[appleId] = 2;
  }

  return (
    <div className="Maze">
      {cellsIds.map((n) => (
        <Cell key={n} id={n} type={cells[n]}></Cell>
      ))}
    </div>
  );
}

export default Maze;
