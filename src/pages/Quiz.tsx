import { lazy, Suspense, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizSkeleton from '../components/Loading/QuizSkeleton';
import { BASE_TIMER } from '../contexts/Questions/QuestionsProvider';
import useAuth from '../hooks/useAuth';
import useQuestions from '../hooks/useQuestions';
import type { User } from '../types/auth.types';
import type { QuizHistory } from '../types/question.types';
import { DIFFICULTY_OPTIONS } from '../utils/difficulty.utils';

const QuizCard = lazy(() => import('../components/Pages/QuizPage/QuizCard'));
const QuizHeader = lazy(() => import('../components/Pages/QuizPage/QuizHeader'));
const QuizTimer = lazy(() => import('../components/Pages/QuizPage/QuizTimer'));

export default function QuizPage() {
  const { user, setUser } = useAuth();
  const { questions, setQuestions, currentQuestion, setCurrentQuestion, timer, setTimer, answers, setAnswers } =
    useQuestions();
  const navigate = useNavigate();

  const question = questions?.[currentQuestion];
  const multiplier = DIFFICULTY_OPTIONS.find(item => item.value === question?.difficulty)?.multiplier || 1.0;
  const newTimer = Math.round(BASE_TIMER * multiplier);

  const reset = useCallback(() => {
    setQuestions([]);
    setCurrentQuestion(0);
    setTimer(BASE_TIMER);
    setAnswers([]);
    localStorage.removeItem('quiz');
  }, [setQuestions, setCurrentQuestion, setTimer, setAnswers]);

  useEffect(() => {
    if (question) setTimer(newTimer);
  }, [question, newTimer, setTimer]);

  useEffect(() => {
    if (!user || !user.status || !questions.length) return;
    if (currentQuestion <= questions.length - 1) return;

    const question = questions[0];

    const quizHistory: QuizHistory = {
      answers: [...answers],
      category: question?.category,
      date: new Date().toISOString(),
      difficulty: question?.difficulty,
      totalQuestions: questions.length,
    };

    const updateUser: User = {
      ...user,
      quizHistory: [...(user?.quizHistory || []), quizHistory],
    };

    setUser(updateUser);
    reset();

    navigate('/scores');
  }, [user, setUser, questions, currentQuestion, answers, reset, navigate]);

  useEffect(() => {
    if (timer > 0) return;
    setCurrentQuestion(prev => prev + 1);
  }, [timer, setCurrentQuestion]);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <Suspense fallback={<QuizSkeleton />}>
        <QuizHeader
          category={question?.category}
          difficulty={question?.difficulty}
          quizData={questions}
          currentQuestion={currentQuestion}
        />
        <QuizTimer initialTimer={newTimer} timer={timer} setTimer={setTimer} />
        <QuizCard
          questions={questions}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          setSelectedAnswer={setAnswers}
        />
      </Suspense>
    </div>
  );
}
