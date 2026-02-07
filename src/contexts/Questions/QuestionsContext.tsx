import { createContext } from 'react';
import type { Category } from '../../types/category.types';
import type { Answer, Question } from '../../types/question.types';

export interface QuestionsContextType {
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  categories: Category[];
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  answers: Answer[];
  setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>;
}

const QuestionsContext = createContext<QuestionsContextType>({} as QuestionsContextType);

export default QuestionsContext;
