import React, { useState, useEffect } from "react";
//components
import Selections from "./components/Selections";
import Bginfo from "./components/Bginfo";
//styles
import "./styles/app.css";
//data
import data from "./round.json";

function App() {
  const [answerList, setAnswerList] = useState([]);
  const [round, setRound] = useState(1);
  const [selection, setSelection] = useState(data[1]);
  const [endingFlag, setEndingFlag] = useState(false);

  const handleRound = (answer) => {
    setRound(round + 1);
    setAnswerList([...answerList, answer]);
  };

  useEffect(() => {
    if (round <= Object.keys(data).length) {
      setSelection(data[round]);
    } else {
      setEndingFlag(true);
    }
  }, [round]);

  useEffect(() => {
    if (endingFlag) {
    }
  }, [endingFlag]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="last-choices-box">
          <h3>last choices:</h3>
          {answerList.map((e, i) => (
            <h2 key={i} className="choice">
              {answerList[i]}
            </h2>
          ))}
        </div>
        <h1 className="round">
          {round}/{Object.keys(data).length}
        </h1>
      </header>
      <footer className="app-bginfo">
        <Bginfo round={round} />
      </footer>
      <main className="app-selection">
        <Selections selection={selection} handleRound={handleRound} />
      </main>
    </div>
  );
}

export default App;
