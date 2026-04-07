import { lazy, Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizSkeleton from '../components/Loading/QuizSkeleton';
import { BASE_TIMER } from '../contexts/Questions/QuestionsProvider';
import useAuth from '../hooks/useAuth';
import useQuestions from '../hooks/useQuestions';
import type { User } from '../types/auth.types';
import type { QuizHistory } from '../types/question.types';
import { DIFFICULTY_OPTIONS } from '../utils/difficulty.utils';
import { stripCategoryPrefix } from '../utils/stripCategoryPrefix.utils';

const QuizCard = lazy(() => import('../components/Pages/QuizPage/QuizCard'));
const QuizHeader = lazy(() => import('../components/Pages/QuizPage/QuizHeader'));
const QuizTimer = lazy(() => import('../components/Pages/QuizPage/QuizTimer'));

export default function QuizPage() {
  const { user, setUser } = useAuth();
  const { questions, currentQuestion, setCurrentQuestion, timer, setTimer, answers, setAnswers, resetQuiz } =
    useQuestions();
  const navigate = useNavigate();

  const question = questions?.[currentQuestion];
  const multiplier = DIFFICULTY_OPTIONS.find(item => item.value === question?.difficulty)?.multiplier || 1.0;
  const newTimer = Math.round(BASE_TIMER * multiplier);

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
    resetQuiz();

    navigate('/scores');
  }, [user, setUser, questions, currentQuestion, answers, resetQuiz, navigate]);

  useEffect(() => {
    if (timer > 0) return;
    setCurrentQuestion(prev => prev + 1);
  }, [timer, setCurrentQuestion]);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <Suspense fallback={<QuizSkeleton />}>
        <QuizHeader
          category={stripCategoryPrefix(question?.category)}
          difficulty={question?.difficulty}
          quizData={questions}
          currentQuestion={currentQuestion}
        />
        <QuizTimer initialTimer={newTimer} timer={timer} />
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
