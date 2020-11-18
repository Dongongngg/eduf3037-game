import React, { useState, useEffect } from 'react';
import PropsTypes from 'prop-types';
import { Link } from 'react-router-dom';
//styles
import '../styles/ending.scss';

export default function Ending(props) {
  const [msg, setMsg] = useState('...');

  useEffect(() => {
    setTimeout(() => {
      setMsg(props.match.params.result);
    }, 2000);
  }, [props.match.params.result]);

  return (
    <div>
      <div className="ending">
        <p>{msg}</p>
        <h3 className="try-again">
          <i className="fas fa-undo-alt end-icon"></i>
          <Link to="/">Try Again?</Link>
        </h3>
      </div>
    </div>
  );
}
Ending.propTypes = {
  match: PropsTypes.object,
};
