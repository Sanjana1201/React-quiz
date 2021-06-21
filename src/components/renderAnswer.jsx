import React from "react";
import questions from "../data";

function renderAnswer(props) {
  function check(option) {
    questions.map((holdQuestion) => {
      if (holdQuestion.key === props.id) {
        return props.isClicked(holdQuestion.answerOptions[option].isCorrect);
      }
    });
  }

  function findOptions(options) {
    if (options.key === props.id) {
      return (
        <div className="d-grid">
          <br />
          <br />
          <button
            className="btn btn-dark btn-lg option"
            onClick={(event) => {
              return check(0);
              event.preventDefault();
            }}
          >
            {options.answerOptions[0].answerText}
          </button>
          <br />
          <button
            className="btn btn-dark btn-lg option"
            onClick={(event) => {
              return check(1);
              event.preventDefault();
            }}
          >
            {options.answerOptions[1].answerText}
          </button>
          <br />
          <button
            className="btn btn-dark btn-lg option"
            onClick={(event) => {
              return check(2);
              event.preventDefault();
            }}
          >
            {options.answerOptions[2].answerText}
          </button>
          <br />
          <button
            className="btn btn-dark btn-lg option"
            onClick={(event) => {
              return check(0);
              event.preventDefault();
            }}
          >
            {options.answerOptions[3].answerText}
          </button>
          <br />
        </div>
      );
    }
  }

  return (
    <div>
      <div className="answer-section">{questions.map(findOptions)}</div>
    </div>
  );
}

export default renderAnswer;
