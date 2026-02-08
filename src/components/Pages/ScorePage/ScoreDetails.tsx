import { Check, FileText, Trophy, X } from 'lucide-react';
import { getScoreGradient } from '../../../utils/score.utils';

interface ScoreDetailsProps {
  quizResult: {
    totalQuestions: number;
    correctAnswers: number;
    wrongAnswers: number;
    accuracy: number;
  };
}

export default function ScoreDetails({ quizResult }: ScoreDetailsProps) {
  const { totalQuestions, correctAnswers, wrongAnswers, accuracy } = quizResult;
  return (
    <div className="space-y-4 mb-8">
      <div
        aria-label="Correct Answers"
        className="flex justify-between items-center p-5 rounded-2xl border border-green-500/30 bg-green-500/10"
      >
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-green-500/20">
            <Check className="w-6 h-6 text-green-400" />
          </div>
          <span className="text-lg text-white font-semibold">Correct Answers</span>
        </div>
        <span className="text-3xl text-green-400 font-bold">{correctAnswers}</span>
      </div>

      <div
        aria-label="Wrong Answers"
        className="flex justify-between items-center p-5 rounded-2xl border border-red-500/30 bg-red-500/10"
      >
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-red-500/20">
            <X className="w-6 h-6 text-red-400" />
          </div>
          <span className="text-lg text-white font-semibold">Wrong Answers</span>
        </div>
        <span className="text-3xl text-red-400 font-bold">{wrongAnswers}</span>
      </div>

      <div
        aria-label="Total Questions"
        className="flex justify-between items-center p-5 rounded-2xl border border-blue-500/30 bg-blue-500/10"
      >
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-blue-500/20">
            <FileText className="w-6 h-6 text-blue-400" />
          </div>
          <span className="text-lg text-white font-semibold">Total Questions</span>
        </div>
        <span className="text-3xl text-blue-400 font-bold">{totalQuestions}</span>
      </div>

      <div
        aria-label="Final Score"
        className={`flex items-center justify-between p-5 bg-linear-to-r ${getScoreGradient(accuracy)} rounded-2xl shadow-lg`}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <span className="text-lg text-white font-semibold">Your Score</span>
        </div>
        <span className="text-3xl text-white font-bold">{accuracy}%</span>
      </div>
    </div>
  );
}
