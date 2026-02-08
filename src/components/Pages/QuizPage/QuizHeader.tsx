import { memo } from 'react';
import type { Question } from '../../../types/question.types';

interface QuizHeaderProps {
  category: string;
  difficulty: string;
  quizData: Question[];
  currentQuestion: number;
}

const QuizHeader = ({ category, difficulty, quizData, currentQuestion }: QuizHeaderProps) => {
  const progress = ((currentQuestion + 1) / quizData.length) * 100;
  return (
    <div className="min-w-75 max-w-250 w-full mb-2.5 p-5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base md:text-xl font-bold text-white capitalize">{category}</h3>
          <p className="text-sm text-gray-400 capitalize">{difficulty}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-400">Question</p>
          <p className="text-base md:text-2xl text-white font-bold">
            {currentQuestion + 1} of {quizData.length}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-3 mb-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full transition-all duration-500 bg-linear-to-r from-purple-500 to-pink-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-right text-gray-400">{progress.toFixed(0)}% Complete</p>
    </div>
  );
};

export default memo(QuizHeader);
