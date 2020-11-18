import React, { useState, useEffect } from 'react';
import PropsTypes from 'prop-types';
//components
// import Header from '../components/Header';
import Selections from '../components/Selections';
import Bginfo from '../components/Bginfo';
import Popup from '../components/Popup';
//styles
import '../styles/test.scss';
//data
import data from '../data/round.json';
import ending from '../data/ending.json';

function Test(props) {
  //  id of questions
  const [questionId, setQuestionId] = useState('0');
  const [currentQuestion, setCurrentQuestion] = useState({});
  //  store answers
  const [answerList, setAnswerList] = useState([]);
  const [endingFlag, setEndingFlag] = useState(false);
  //scroll to location
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  //handle each round and get answer from selection area
  const handleNextQuestion = (next, answer) => {
    setQuestionId(next);
    setAnswerList([...answerList, answer]);
    scrollTo('top');
  };

  useEffect(() => {
    if (answerList.length === 7) {
      setEndingFlag(true);
    }
  }, [answerList]);
  // Get current question data by question id
  useEffect(() => {
    let questions = data.find((question) => question.id === questionId);
    console.log(questions);
    setCurrentQuestion(questions);
  }, [questionId]);

  // get ending by comparing number of answer A and B
  const handleResult = (answer) => {
    let cntA = 0;
    let cntB = 0;
    answer.splice(2).forEach((e) => {
      if (e === 'A') {
        cntA = cntA + 1;
      } else {
        cntB = cntB + 1;
      }
    });
    if (cntA > cntB) {
      return questionId.includes('L')
        ? ending.find((e) => e.id === 'L').good
        : questionId.includes('T')
        ? ending.find((e) => e.id === 'T').good
        : questionId.includes('M')
        ? ending.find((e) => e.id === 'M').good
        : null;
    } else {
      return questionId.includes('L')
        ? ending.find((e) => e.id === 'L').bad
        : questionId.includes('T')
        ? ending.find((e) => e.id === 'T').bad
        : questionId.includes('M')
        ? ending.find((e) => e.id === 'M').bad
        : null;
    }
  };
  const checkResult = () => {
    let result = handleResult(answerList);
    props.history.push(`/ending/${result}`);
  };

  return (
    <div className="test" id="top">
      {/* <header className="test-header">
        <Header answerList={answerList} id={questionId} />
      </header> */}
      <main
        className="test-bginfo"
        style={{
          backgroundImage: `url(/img/${currentQuestion.id || '0'}.png)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <Bginfo data={currentQuestion} />
      </main>
      <footer className="test-selection ani-slide">
        <Selections data={currentQuestion} handleNextQuestion={handleNextQuestion} />
      </footer>
      <Popup show={endingFlag} checkResult={checkResult} />
    </div>
  );
}
Test.propTypes = {
  history: PropsTypes.object,
};

export default Test;
