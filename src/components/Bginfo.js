import React from 'react';
import PropsTypes from 'prop-types';
//styles
import '../styles/bginfo.scss';

export default function Bginfo({ data }) {
  return (
    <div className="bginfo-box">
      <div className="bginfo-description ani-slide" id="description">
        <p>{data.question}</p>
      </div>
    </div>
  );
}

Bginfo.propTypes = {
  data: PropsTypes.object,
};
