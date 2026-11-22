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
    <div className="surface mb-3 w-full rounded-2xl p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-manrope font-bold capitalize">{category}</h3>
          <p className="mt-1 text-xs text-zinc-500 capitalize">{difficulty}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-zinc-500">Question</p>
          <p className="mt-1 font-manrope text-lg font-bold">
            {currentQuestion + 1} <span className="text-zinc-600">/ {quizData.length}</span>
          </p>
        </div>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-[#ff0513] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default memo(QuizHeader);
