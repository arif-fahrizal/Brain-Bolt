import { Trophy } from 'lucide-react';
import { getScoreGradient, getScoreText } from '../../../utils/score.utils';

export default function ScoreHeader({ accuracy }: { accuracy: number }) {
  return (
    <div className="mb-8 text-center">
      <div
        className={`flex items-center justify-center w-24 h-24 mx-auto mb-6 rounded-full bg-linear-to-br ${getScoreGradient(accuracy)} shadow-2xl`}
      >
        <Trophy className="w-12 h-12 text-white" />
      </div>

      <h1 className="mb-2 text-4xl md:text-5xl text-white font-bold">{getScoreText(accuracy)}</h1>
      <p className="text-lg text-gray-300">You've completed the quiz</p>
    </div>
  );
}
