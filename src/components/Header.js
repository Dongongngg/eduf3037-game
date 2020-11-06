import React from "react";
//
import "../styles/header.scss";

export default function Header(props) {
  const { answerList, round, maxRound } = props;
  return (
    <>
      <div className="last-choices-box">
        <h3>Last choices:</h3>
        {answerList.map((e, i) => (
          <h2 key={i} className="choice">
            {answerList[i]}
          </h2>
        ))}
      </div>
      {round >= maxRound + 1 ? (
        <h1 className="round">Done</h1>
      ) : (
        <h1 className="round">{round + "/" + maxRound}</h1>
      )}
    </>
  );
}
