import { useEffect, useState } from 'react';
import { fetchAPI } from '../../lib/api';
import type { Category } from '../../types/category.types';
import type { Answer, Question } from '../../types/question.types';
import QuestionsContext from './QuestionsContext';

interface QuizData {
  questions: Question[];
  currentQuestion: number;
  timer: number;
  answers: Answer[];
}

export const TIMER = 10;

export default function QuestionsProvider({ children }: { children: React.ReactNode }) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [categories, setCategories] = useState<Category[]>([]);
  const [timer, setTimer] = useState<number>(TIMER);
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    const getQuizData = () => {
      try {
        const savedData = localStorage.getItem('quiz');
        if (savedData) {
          const quizData: QuizData = JSON.parse(savedData);
          setQuestions(quizData.questions);
          setCurrentQuestion(quizData.currentQuestion);
          setTimer(quizData.timer);
          setAnswers(quizData.answers);
        }
      } catch (error) {
        console.error('Error loading quiz data:', error);
      }
    };

    getQuizData();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await fetchAPI('/api_category.php');
        setCategories(categories.trivia_categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const saveQuizData = () => {
      if (timer <= 0 || (questions.length !== 0 && currentQuestion > questions.length - 1)) return;

      localStorage.setItem('quiz', JSON.stringify({ questions, currentQuestion, timer, answers }));
    };

    window.addEventListener('beforeunload', saveQuizData);

    return () => {
      window.removeEventListener('beforeunload', saveQuizData);
    };
  }, [questions, currentQuestion, timer, answers]);

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        setQuestions,
        currentQuestion,
        setCurrentQuestion,
        categories,
        timer,
        setTimer,
        answers,
        setAnswers,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}
