import { createContext } from 'react';
import type { Category } from '../../types/category.types';
import type { Question } from '../../types/question.types';

export interface QuestionsContextType {
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  categories: Category[];
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const QuestionsContext = createContext<QuestionsContextType>({} as QuestionsContextType);

export default QuestionsContext;
