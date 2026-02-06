import { useEffect, useState } from 'react';
import { fetchAPI } from '../../lib/api';
import type { Category } from '../../types/category.types';
import type { Question } from '../../types/question.types';
import QuestionsContext from './QuestionsContext';

interface QuizData {
  questions: Question[];
  currentQuestion: number;
  time: number;
  score: number;
}

export default function QuestionsProvider({ children }: { children: React.ReactNode }) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [categories, setCategories] = useState<Category[]>([]);
  const [time, setTime] = useState<number>(60 * 10);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const loadQuizData = () => {
      try {
        const savedData = localStorage.getItem('quiz');
        if (savedData) {
          const quizData: QuizData = JSON.parse(savedData);
          setQuestions(quizData.questions);
          setCurrentQuestion(quizData.currentQuestion);
          setTime(quizData.time);
          setScore(quizData.score);
        }
      } catch (error) {
        console.error('Error loading quiz data:', error);
      }
    };

    loadQuizData();
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
      if (questions.length === 0) return;
      localStorage.setItem('quiz', JSON.stringify({ questions, currentQuestion, time, score }));
    };

    window.addEventListener('beforeunload', saveQuizData);

    return () => {
      window.removeEventListener('beforeunload', saveQuizData);
    };
  }, [questions, currentQuestion, time, score]);

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        setQuestions,
        currentQuestion,
        setCurrentQuestion,
        categories,
        time,
        setTime,
        score,
        setScore,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}
