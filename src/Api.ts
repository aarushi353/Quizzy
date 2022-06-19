import QuestionDisplay from "./components/QuestionDisplay";
import { shuffleArray } from "./utils";

export type Question = {
 category: string,
 correct_answer: string;
 difficulty: string;
 incorrect_answers: string[];
 question: string;
 type: string;   
}

export enum difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestions = async (amount: number, difficulty: difficulty):Promise<QuestionsState[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=31&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
}