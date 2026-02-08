import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizCard from '../components/Pages/QuizPage/QuizCard';
import QuizHeader from '../components/Pages/QuizPage/QuizHeader';
import QuizTimer from '../components/Pages/QuizPage/QuizTimer';
import { TIMER } from '../contexts/Questions/QuestionsProvider';
import useAuth from '../hooks/useAuth';
import useQuestions from '../hooks/useQuestions';
import type { User } from '../types/auth.types';
import type { QuizHistory } from '../types/question.types';

export default function QuizPage() {
  const { user, setUser } = useAuth();
  const { questions, setQuestions, currentQuestion, setCurrentQuestion, timer, setTimer, answers, setAnswers } =
    useQuestions();
  const navigate = useNavigate();

  const question = questions?.[currentQuestion];

  const reset = useCallback(() => {
    setQuestions([]);
    setCurrentQuestion(0);
    setTimer(TIMER);
    setAnswers([]);
    localStorage.removeItem('quiz');
  }, [setQuestions, setCurrentQuestion, setTimer, setAnswers]);

  useEffect(() => {
    if (!user) return;

    const question = questions[0];

    const quizHistory: QuizHistory = {
      category: question?.category,
      date: new Date().toISOString(),
      difficulty: question?.difficulty,
      answers: [...answers],
    };

    const updateUser: User = {
      ...user,
      quizHistory: [...(user?.quizHistory || []), quizHistory],
    };

    if (timer <= 0 || (questions.length !== 0 && currentQuestion > questions.length - 1)) {
      setUser(updateUser);
      reset();

      navigate('/scores');
    }
  }, [user, setUser, questions, currentQuestion, timer, answers, navigate, reset]);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <QuizHeader
        category={question?.category}
        difficulty={question?.difficulty}
        quizData={questions}
        currentQuestion={currentQuestion}
      />
      <QuizTimer timer={timer} setTimer={setTimer} />
      <QuizCard
        questions={questions}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        setSelectedAnswer={setAnswers}
      />
    </div>
  );
}
