import React from "react";
import { Link } from "react-router-dom";
//styles
import "../styles/ending.css";

export default function Ending(props) {
  return (
    <div>
      <div className="ending">
        <h1>This is the end, {props.match.params.result}</h1>
        <h3 className="try-again ">
          <Link to="/">Try Again?</Link>
        </h3>
      </div>
    </div>
  );
}
