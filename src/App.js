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
  const [loadFlag, setLoadFlag] = useState(false);
  const [endingFlag, setEndingFlag] = useState(false);
  //scroll to location
  const scrollTo = (props) => {
    document.getElementById(props).scrollIntoView({ behavior: "smooth" });
  };
  //handle each round and get answer from selection area
  const handleRound = (answer) => {
    setRound(round + 1);
    setAnswerList([...answerList, answer]);
    scrollTo("top");
    setLoadFlag(true);
  };

  //when round reaches 6, redirect to ending
  useEffect(() => {
    if (round <= Object.keys(data).length) {
      setSelection(data[round]);
    } else {
      setEndingFlag(true);
    }
  }, [round]);

  // useEffect(() => {
  //   if (endingFlag) {
  //   }
  // }, [endingFlag]);

  return (
    <div className="app" id="top">
      <header className="app-header">
        <div className="last-choices-box">
          <h3>last choices:</h3>
          {answerList.map((e, i) => (
            <h2 key={i} className="choice">
              {answerList[i]}
            </h2>
          ))}
        </div>
        {round >= 6 ? (
          <h1 className="round">Done</h1>
        ) : (
          <h1 className="round">{round + "/" + Object.keys(data).length}</h1>
        )}
      </header>
      <footer className="app-bginfo">
        <Bginfo round={round} loadFlag={loadFlag} />
      </footer>
      <main className="app-selection">
        <Selections selection={selection} handleRound={handleRound} />
      </main>
    </div>
  );
}

export default App;
