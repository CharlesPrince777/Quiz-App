import { useState, useEffect } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import Quiz from "./Quiz";

const QuizApp = () => {
  const [quizData, setQuizData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const API_URL = `https://the-trivia-api.com/v2/questions?categories=science&difficulties=medium&limit=20`;

    const fetchQuestion = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error("Can't access the server right now!");
        }
        const data = await res.json();
        setQuizData(data);
      } catch (err) {
        setErr(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestion();
  }, []);

  return (
    <div className="quizApp">
      <h1>
        Trivia Quiz <FaQuestionCircle />
      </h1>
      {isLoading && (
        <div className="loaderContainer">
          <div className="loader"></div>
          <p>Loading questions...</p>
        </div>
      )}
      {err && (
        <div className="errorMessage">
          <BiError />
          <p>{err}</p>
        </div>
      )}
      {!err && !isLoading && (
        <Quiz
          quizData={quizData}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      )}
    </div>
  );
};

export default QuizApp;
