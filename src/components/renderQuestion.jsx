import React from "react";
import questions from "../data";

function renderQuestion(props) {
  function findQuestion(ques) {
    if (ques.key === props.id) {
      return <div>{ques.questionText}</div>;
    }
  }

  return (
    <div className="question-section">
      <div className="question-count">
        <span>Question {props.id}</span>/{questions.length}
      </div>
      <div className="question-text">{questions.map(findQuestion)}</div>
    </div>
  );
}

export default renderQuestion;
