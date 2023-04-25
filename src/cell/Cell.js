import { useState } from "react";
import "./Cell.css";

function Cell(props) {
  const id = props.id;
  const type = props.type;

  let blue = "#aabdf6";
  let purple = "#A020F0";
  let red = "#e95353";
  let green = "#79f357";

  let color = blue;

  switch (type) {
    case 0:
      color = blue;
      break;
    case 1:
      color = purple;
      break;
    case 2:
      color = red;
      break;
    case 3:
      color = green;
      break;
    default:
      color = blue;
  }

  const [bgColor, setBgColor] = useState(color);

  const changeColor = () => {
    if (bgColor === purple) {
      setBgColor(blue);
    }
  };

  return (
    <div className="Cell" onClick={changeColor} style={{ background: bgColor }}>
      {id}
    </div>
  );
}

export default Cell;
