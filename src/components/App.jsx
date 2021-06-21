import React, { useState, useEffect, useRef } from "react";
import questions from "../data";
import RenderQuestion from "./renderQuestion";
import RenderAnswer from "./renderAnswer";
const { v4: uuidv4 } = require("uuid");

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [TorF, setTorF] = useState([]);
  const [seconds, setSeconds] = React.useState(10);

  // React.useEffect(() => {
  //   if (seconds > 0) {
  //     setTimeout(() => setSeconds(seconds - 1), 1000);
  //   } else {
  //     setSeconds("Time is up!");
  //     // setShowScore(true);
  //   }
  // });

  var holdStatus = "";

  function newQuestion(questionData) {
    return (
      <div className="app">
        <div className="timer-text">{seconds}</div>
        <RenderQuestion key={uuidv4()} id={questionData} />
        <RenderAnswer id={questionData} key={uuidv4()} isClicked={markAnswer} />
        <button
          onClick={() => {
            return viewNext(questionData);
          }}
          key={uuidv4()}
          id={questionData}
          className="btn btn-lg next"
        >
          {questionData === 4 ? "submit" : "Next Question >"}
        </button>
      </div>
    );
  }

  function markAnswer(status) {
    holdStatus = status;
  }

  function viewNext(props) {
    if (props < 4) {
      setCurrentQuestion(props + 1);
      setTorF((preValue) => {
        return [...preValue, holdStatus];
      });
    } else {
      setTorF((preValue) => {
        return [...preValue, holdStatus];
      });
      setShowScore(true);
    }
  }

  function Scores() {
    return (
      <div className="score-section">
        You scored {TorF.filter(Boolean).length} out of {questions.length}
      </div>
    );
  }

  return <div>{showScore ? Scores() : newQuestion(currentQuestion)}</div>;
}

export default App;
