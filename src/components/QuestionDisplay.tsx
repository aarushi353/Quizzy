import React from "react";
import {AnswerObject} from "../App";

import {ButtonWrapper, Wrapper } from "./QuestionDisplay.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e:React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
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
  <Wrapper>
    <p className="num">
      Question : {questionNo} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
        {answers.map((answer) => (
            <ButtonWrapper key={answer} correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}>
                <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                </button>
            </ButtonWrapper>
        ))}   
    </div>
  </Wrapper>
  
);

export default QuestionDisplay;
