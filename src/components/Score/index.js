import React from "react";
import "./style.css";

function Score(props) {
  return (
    <span id="score-row">
      <h3 id="score">Score: {props.userScore}</h3>
      <div id="score-divider"></div>
      <h3 id="high-score">High Score: {props.highScore}</h3>
    </span>
  );
}

export default Score;
