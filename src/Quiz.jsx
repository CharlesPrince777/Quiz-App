import { useState, useMemo } from "react";
import Options from "./Options";
import FinalStatement from "./FinalStatement";

function randomFunc() {
  return Math.random() - 0.5;
}

const Quiz = ({ quizData, currentQuestion, setCurrentQuestion }) => {
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const options = useMemo(() => {
    return [
      ...quizData[currentQuestion].incorrectAnswers,
      quizData[currentQuestion].correctAnswer,
    ].sort((a, b) => randomFunc());
  }, [quizData, currentQuestion]);

  const nextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
    setSelected(null);
    const allButtons = document.querySelectorAll(".optionBtn");
    allButtons.forEach((button) => {
      button.classList.remove("correct", "incorrect");
    });
  };

  const handleOptionClick = (e) => {
    if (selected !== null) return;
    const clickedOption = e.target;
    const correctAnswer = quizData[currentQuestion].correctAnswer;
    const allButtons =
      clickedOption.parentElement.querySelectorAll(".optionBtn");

    if (clickedOption.innerText === correctAnswer) {
      clickedOption.classList.add("correct");
      setScore((prev) => prev + 1);
      setSelected(clickedOption.innerText);
    } else {
      clickedOption.classList.add("incorrect");
      allButtons.forEach((button) => {
        if (button.innerText === correctAnswer) {
          button.classList.add("correct");
        }
      });
      setSelected(clickedOption.innerText);
    }
  };

  return (
    <>
      <div className="quizHeader">
        <p>
          Question: {currentQuestion + 1} of {quizData.length}
        </p>
        <span className="score">Score: {score}</span>
      </div>
      {currentQuestion < quizData.length ? (
        <>
          <h2>
            {currentQuestion + 1}. {quizData[currentQuestion].question.text}
          </h2>
          <Options
            options={options}
            selected={selected}
            handleOptionClick={handleOptionClick}
          />
          <button
            onClick={nextQuestion}
            style={{ display: selected ? "block" : "none" }}
            className="nextBtn"
          >
            Next Question
          </button>
        </>
      ) : (
        <div className="quizEnd">
          <h2>Quiz Completed!</h2>
          <p>Final Score: {score}</p>
          <FinalStatement score={score} quizLength={quizData.length} />
        </div>
      )}
    </>
  );
};

export default Quiz;
