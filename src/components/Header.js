import React from "react";
//
import "../styles/header.scss";

export default function Header(props) {
  const { answerList, id } = props;
  return (
    <>
      <div className="last-choices-box">
        <h3 style={{ fontSize: "1rem" }}>Last choices:</h3>
        {answerList.map((e, i) => (
          <h2 key={i} className="choice">
            {answerList[i]}
          </h2>
        ))}
      </div>

      <h1 className="round">Q{id}</h1>
    </>
  );
}
