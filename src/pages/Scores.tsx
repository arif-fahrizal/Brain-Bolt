import { Home } from 'lucide-react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import ScoreDetails from '../components/Pages/ScorePage/ScoreDetails';
import ScoreHeader from '../components/Pages/ScorePage/ScoreHeader';
import useAuth from '../hooks/useAuth';

export default function ScoresPage() {
  const { user } = useAuth();
  const quizResults = useMemo(() => {
    const newestResult = user?.quizHistory?.at(-1);
    const totalQuestions = newestResult?.totalQuestions || 0;
    const correctAnswers =
      newestResult?.answers?.filter(answer => answer.correctAnswer === answer.selectedAnswer).length || 0;
    const wrongAnswers = totalQuestions - correctAnswers;
    const accuracy = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;
    return { totalQuestions, correctAnswers, wrongAnswers, accuracy };
  }, [user.quizHistory]);

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-4 py-10 text-white">
      <div className="pointer-events-none absolute left-1/2 top-[-18rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#ff0513]/[0.09] blur-[100px]" />
      <div className="surface relative w-full max-w-2xl rounded-[2rem] p-5 sm:p-10">
        <ScoreHeader accuracy={quizResults.accuracy} />
        <ScoreDetails quizResult={quizResults} />
        <Link to="/" className="btn-primary mt-6 w-full px-4 py-3.5">
          <Home className="h-5 w-5" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
