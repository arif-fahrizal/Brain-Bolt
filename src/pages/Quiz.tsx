import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizCard from '../components/Pages/QuizPage/QuizCard';
import QuizHeader from '../components/Pages/QuizPage/QuizHeader';
import QuizTimer from '../components/Pages/QuizPage/QuizTimer';
import useQuestions from '../hooks/useQuestions';

export default function QuizPage() {
  const { questions, currentQuestion, setCurrentQuestion, timer, setTimer, setAnswers } = useQuestions();
  const navigate = useNavigate();

  const question = questions?.[currentQuestion];

  useEffect(() => {
    if (currentQuestion >= questions.length || timer <= 0) {
      navigate('/');
    }
  }, [currentQuestion, questions, timer, navigate]);

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
