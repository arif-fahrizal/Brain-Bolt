import { memo, useMemo } from 'react';
import type { Answer, Question } from '../../../types/question.types';

interface QuizCardProps {
  questions: Question[];
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<Answer[]>>;
}
const shuffle = (array: string[]) => [...array].sort(() => Math.random() - 0.5);

const QuizCard = ({ questions, currentQuestion, setCurrentQuestion, setSelectedAnswer }: QuizCardProps) => {
  const question = questions?.[currentQuestion];
  const options = useMemo(
    () => shuffle(question?.incorrect_answers.concat(question?.correct_answer) || []),
    [question]
  );
  const handleSelectOptions = (answer: string) => {
    setSelectedAnswer(prev => [...prev, { correctAnswer: question?.correct_answer, selectedAnswer: answer }]);
    setCurrentQuestion(prev => prev + 1);
  };

  return (
    <div className="surface w-full rounded-[2rem] p-5 sm:p-8">
      <div className="mb-7">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#ff0513]">
          Question {currentQuestion + 1}
        </p>
        <h2 className="font-manrope text-xl font-bold leading-snug sm:text-3xl">{question?.question}</h2>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelectOptions(option)}
            className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff0513]/35 hover:bg-[#ff0513]/[0.07] sm:p-4"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/[0.09] text-sm font-bold text-zinc-400 transition-colors group-hover:border-[#ff0513]/30 group-hover:text-red-300">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="flex-1 text-sm font-medium leading-6 text-zinc-200 sm:text-base">{option}</span>
          </button>
        ))}
      </div>
      <p className="mt-5 text-center text-xs text-zinc-600">Select an answer to continue.</p>
    </div>
  );
};

export default memo(QuizCard);
