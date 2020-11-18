import React from 'react';
import PropsTypes from 'prop-types';
//styles
import '../styles/bginfo.scss';

export default function Bginfo({ data }) {
  return (
    <div className="bginfo-box">
      <div className="bginfo-title"></div>
      <div className="bginfo-description ani-slide" id="description">
        <h2>{data.question}</h2>
      </div>
    </div>
  );
}

Bginfo.propTypes = {
  data: PropsTypes.object,
};
