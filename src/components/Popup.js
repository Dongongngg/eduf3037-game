import React from 'react';
import PropsTypes from 'prop-types';
//styles
import '../styles/popup.scss';

export default function Popup(props) {
  const { show, checkResult } = props;

  return (
    <div className="container" style={{ display: show ? 'flex' : 'none' }}>
      <div className="popup">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <i className="far fa-grin-beam popup-icon"></i>
          <h2 className="title">Result Ready</h2>
        </div>

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
