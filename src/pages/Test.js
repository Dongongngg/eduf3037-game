import React, { useState, useEffect } from "react";
//components
import Header from "../components/Header";
import Selections from "../components/Selections";
import Bginfo from "../components/Bginfo";
//styles
import "../styles/test.scss";
//data
import data from "../data/round.json";

function Test(props) {
  //  id of questions
  const [questionId, setQuestionId] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState({});
  //  store answers
  const [answerList, setAnswerList] = useState([]);
  const [endingFlag, setEndingFlag] = useState(false);
  //scroll to location
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  //handle each round and get answer from selection area
  const handleNextQuestion = (next, answer) => {
    setQuestionId(next);
    setAnswerList([...answerList, answer]);
    scrollTo("top");
  };

  // Get current question data by question id
  useEffect(() => {
    let questions = data.find((question) => question.id == questionId);
    console.log(questions);
    setCurrentQuestion(questions);
  }, [questionId]);

  // get ending by comparing number of answer A and B
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
        <Header answerList={answerList} id={questionId} />
      </header>
      <main className="test-bginfo">
        <Bginfo data={currentQuestion} />
      </main>
      <footer className="test-selection ani-slide">
        <Selections
          data={currentQuestion}
          handleNextQuestion={handleNextQuestion}
        />
      </footer>
    </div>
  );
}

export default Test;
