import { ChevronRight, Play, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useBoolean from '../../../hooks/useBoolean';
import useQuestions from '../../../hooks/useQuestions';
import QuizSetupPopup from '../../UI/PopUp/PopUp';

export default function HeroSection() {
  const navigate = useNavigate();

  const { user } = useAuth();
  const { questions } = useQuestions();
  const { value: isModalOpen, onTrue, onFalse } = useBoolean();

  const handleStartQuiz = () => {
    if (!user.status) {
      navigate('/sign-in');
    } else if (questions.length > 0) {
      navigate('/quiz');
    } else {
      onTrue();
    }
  };

  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 text-white rounded-full bg-white/10 backdrop-blur-sm">
          <Trophy className="w-5 h-5 text-yellow-400" />
          <span className="text-sm font-medium">Join 15,000+ Quiz Enthusiasts</span>
        </div>

        <h2 className="mb-6 text-5xl md:text-7xl text-white font-extrabold leading-tight">
          Test Your
          <span className="block text-transparent bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">
            Knowledge
          </span>
        </h2>

        <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
          Challenge yourself with quick quizzes across various topics. Learn, compete, and have fun!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleStartQuiz}
            className="group btn-primary flex justify-center items-center gap-2 px-8 py-4 text-lg"
          >
            <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
            Start Quiz Now
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="px-8 py-4 text-lg text-white font-bold rounded-xl border-2 transition-all border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20">
            View Leaderboard
          </button>
        </div>
      </div>
      <QuizSetupPopup isOpen={isModalOpen} onClose={onFalse} />
    </section>
  );
}
