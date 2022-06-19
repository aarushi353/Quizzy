import { useState } from "react";
import QuestionDisplay from "./components/QuestionDisplay"

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  

  const start = async () => {
    
  }

  const checkAns = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQues = () => {

  }

  return (
    <div className="App">
      <h1>Anime fans, huh?</h1>
      <button className="start" onClick={start}>
        Let's begin...
      </button>
      <p className="score">Score:</p>
      <p>Hold on, loading questions...</p>
      <QuestionDisplay
        questionNo={number+1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number]:undefined}
        callback={checkAns}
      />
      <button className="next" onClick={nextQues}></button>
      Next Question
    </div>
  );
}

export default App;
