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
      <div className="bginfo-description">
        <h3>{bginfo[round]}</h3>
      </div>
    </div>
  );
}
