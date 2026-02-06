import QuizCard from '../components/Pages/QuizPage/QuizCard';
import QuizHeader from '../components/Pages/QuizPage/QuizHeader';
import QuizTimer from '../components/Pages/QuizPage/QuizTimer';

export default function QuizPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <QuizHeader category="General Knowledge Quiz" difficulty="Easy" quizData={['a', 'b']} currentQuestion={0} />
      <QuizTimer />
      <QuizCard />
    </div>
  );
}
