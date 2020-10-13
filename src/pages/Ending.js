import React from "react";
//
import "../styles/ending.css";

export default function Ending(props) {
  return (
    <div className="ending">
      <h1>This is the end, {props.match.params.result}</h1>
    </div>
  );
}
