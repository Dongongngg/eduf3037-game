import React, { useState, useEffect } from "react";
//components
import Header from "../components/Header";
import Selections from "../components/Selections";
import Bginfo from "../components/Bginfo";
//styles
import "../styles/test.css";
//data
import data from "../round.json";

function Test(props) {
  const [answerList, setAnswerList] = useState([]);
  const [round, setRound] = useState(1);
  const [selection, setSelection] = useState(data[1]);
  const [endingFlag, setEndingFlag] = useState(false);
  //scroll to location
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  //handle each round and get answer from selection area

  const handleRound = (answer) => {
    setRound(round + 1);
    setAnswerList([...answerList, answer]);
    scrollTo("top");
  };

  //when round reaches 6, redirect to ending
  useEffect(() => {
    if (round <= Object.keys(data).length) {
      setSelection(data[round]);
    } else {
      setEndingFlag(true);
    }
  }, [round]);

  useEffect(() => {
    const handleResult = (answer) => {
      let cntA = 0;
      let cntB = 0;
      answer.forEach((e) => {
        if (e === "A") {
          cntA = cntA + 1;
        } else {
          cntB = cntB + 1;
        }
      });
      if (cntA > cntB) {
        return "Good Ending";
      } else {
        return "Bad Ending";
      }
    };

    if (endingFlag) {
      let result = handleResult(answerList);
      props.history.push(`/ending/${result}`);
    }
  }, [endingFlag, answerList, props.history]);

  return (
    <div className="test" id="top">
      <header className="test-header">
        <Header
          answerList={answerList}
          round={round}
          maxRound={Object.keys(data).length}
        />
      </header>
      <footer className="test-bginfo">
        <Bginfo round={round} />
      </footer>
      <main className="test-selection ani-slide">
        <Selections selection={selection} handleRound={handleRound} />
      </main>
    </div>
  );
}

export default Test;
