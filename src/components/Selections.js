import React from "react";
//style
import "../styles/selection.scss";

export default function Selections(props) {
  const { selection, handleRound } = props;
  return (
    <>
      <div className="selection-box">
        <div className="img">{selection[0].img}</div>
        <div className="description">
          <p>{selection[0].description}</p>
        </div>
        <div
          className="answer"
          onClick={() => handleRound(selection[0].answer)}
        >
          <h1>{selection[0].answer}</h1>
        </div>
      </div>
      <div className="selection-box">
        <div className="img">{selection[1].img}</div>
        <div className="description">
          <p>{selection[1].description}</p>
        </div>
        <div
          className="answer"
          onClick={() => handleRound(selection[1].answer)}
        >
          <h1>{selection[1].answer}</h1>
        </div>
      </div>
    </>
  );
}
