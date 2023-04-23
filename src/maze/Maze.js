import Cell from "../cell/Cell";
import "./Maze.css";

function Maze(props) {
  const rows = props.rows;
  const columns = props.columns;

  const cellsIds = [[]];
  let id = 0;
  for (let row = 0; row > rows; row++) {
    for (let column = 0; column > columns; column++) {
      cellsIds[row][column] = id;
      id++;
    }
  }

  const numbers = [...Array(rows * columns).keys()];

  function getCellRow(cellId) {
    return parseInt(cellId / columns);
  }

  function getCellColumn(cellId) {
    return cellId % columns;
  }

  return (
    <div className="Maze">
      {numbers.map((n) => (
        <Cell key={n} row={getCellRow(n)} column={getCellColumn(n)}></Cell>
      ))}
    </div>
  );
}

export default Maze;
