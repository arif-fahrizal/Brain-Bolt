import { Trophy } from 'lucide-react';
import { getScoreConfig } from '../../../utils/score.utils';

export default function ScoreHeader({ accuracy }: { accuracy: number }) {
  const { gradient, text } = getScoreConfig(accuracy);
  return (
    <div className="mb-8 text-center">
      <div
        className={`flex items-center justify-center w-24 h-24 mx-auto mb-6 rounded-full bg-linear-to-br ${gradient} shadow-2xl`}
      >
        <Trophy className="w-12 h-12 text-white" />
      </div>

      <h1 className="mb-2 text-4xl md:text-5xl text-white font-bold">{text}</h1>
      <p className="text-lg text-gray-300">You've completed the quiz</p>
    </div>
  );
}
