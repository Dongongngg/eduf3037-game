import React from 'react';
import PropsTypes from 'prop-types';
//style
import '../styles/selection.scss';

export default function Selections(props) {
  const { data, handleNextQuestion } = props;
  return (
    <>
      {data.choices ? (
        data.choices.map((choice, i) => (
          <aside className="selection-box" key={i}>
            <i className="fas fa-question-circle icon"></i>
            <div className="text">
              <div className="description">
                <p>{choice.des}</p>
              </div>
              <button
                className="answer"
                onClick={() => handleNextQuestion(choice.next, choice.value)}
              >
                <p>{choice.name}</p>
              </button>
            </div>
          </aside>
        ))
      ) : (
        <h1>loading...</h1>
      )}
    </>
  );
}
Selections.propTypes = {
  data: PropsTypes.object,
  handleNextQuestion: PropsTypes.func,
};
