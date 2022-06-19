import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNo: number;
  totalQuestions: number;
};

const QuestionDisplay: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNo,
  totalQuestions,
}) => (
  <div>
    <p className="num">
      Question : {questionNo} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
        {answers.map((answer) => (
            <div key={answer}>
                <button disabled={userAnswer} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                </button>
            </div>
        ))}   
    </div>
  </div>
);

export default QuestionDisplay;
