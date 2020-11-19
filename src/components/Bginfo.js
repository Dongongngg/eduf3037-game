import React from 'react';
import PropsTypes from 'prop-types';
//styles
import '../styles/bginfo.scss';

export default function Bginfo({ data }) {
  return (
    <div className="bginfo-box">
      <div className="bginfo-description ani-slide" id="description">
        <i className="far fas fa-hand-pointer bg-icon ani-up"></i>
        <p className="bg-text">{data.question}</p>
      </div>
    </div>
  );
}

Bginfo.propTypes = {
  data: PropsTypes.object,
};
