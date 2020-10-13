import React from "react";
// data
import bginfo from "../bginfo.json";
//styles
import "../styles/bginfo.css";
export default function Bginfo(props) {
  const { round } = props;

  return (
    <div className="bginfo-box">
      <div className="bginfo-title"></div>
      <div className="bginfo-description ani-slide" id="description">
        <h2>{bginfo[round]}</h2>
      </div>
    </div>
  );
}
