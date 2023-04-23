import "./Cell.css";

function Cell(props) {
  const row = props.row;
  const column = props.column;

  // const type = props.type;

  return <div className="Cell">{row + " - " + column}</div>;
}

export default Cell;
