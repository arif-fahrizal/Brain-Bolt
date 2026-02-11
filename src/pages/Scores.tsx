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
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-2xl w-full p-8 md:p-12 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-2xl">
        <ScoreHeader accuracy={quizResults.accuracy} />
        <ScoreDetails quizResult={quizResults} />
        <Link to="/" className="btn-primary flex items-center justify-center gap-2 py-4 text-lg">
          <Home className="w-5 h-5" />
          Home
        </Link>
      </div>
    </div>
  );
}
