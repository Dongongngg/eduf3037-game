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
          <div className="selection-box" key={i}>
            <div className="img">{choice.img}</div>
            <div className="text">
              <div className="description">
                <p>{choice.des}</p>
              </div>
              <div className="answer" onClick={() => handleNextQuestion(choice.next, choice.value)}>
                <h1>{choice.name}</h1>
              </div>
            </div>
          </div>
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
