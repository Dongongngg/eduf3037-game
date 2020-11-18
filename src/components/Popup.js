import React from 'react';
import PropsTypes from 'prop-types';
//styles
import '../styles/popup.scss';

export default function Popup(props) {
  const { show, checkResult } = props;

  return (
    <div className="container" style={{ display: show ? 'flex' : 'none' }}>
      <div className="popup">
        <h2 className="title">Result Ready</h2>
        <button className="button" onClick={checkResult}>
          <h2>Check</h2>
        </button>
      </div>
    </div>
  );
}

Popup.propTypes = {
  show: PropsTypes.bool,
  checkResult: PropsTypes.func,
};
