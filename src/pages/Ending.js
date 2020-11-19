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
    }, 1000);
  }, [props.match.params.result]);

  return (
    <main className="ending">
      <p>{msg}</p>
      <div className="try-again">
        <i className="fas fa-undo-alt end-icon"></i>
        <Link to="/">Try Again?</Link>
      </div>
    </main>
  );
}
Ending.propTypes = {
  match: PropsTypes.object,
};
