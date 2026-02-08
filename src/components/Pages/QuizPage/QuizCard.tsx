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

  const options = useMemo(() => {
    const allOptions = question?.incorrect_answers.concat(question?.correct_answer) || [];
    return shuffle(allOptions);
  }, [question]);

  const handleSelectOptions = (answer: string) => {
    const selectedAnswer = { correctAnswer: question?.correct_answer, selectedAnswer: answer };

    setSelectedAnswer(prev => [...prev, selectedAnswer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="min-w-75 max-w-250 w-full mb-2.5 p-5 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-2xl">
      <div className="mb-8">
        <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-4">
          <span className="text-purple-300 text-sm font-semibold">Question {currentQuestion + 1}</span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">{question?.question}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
        {options?.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelectOptions(option)}
            className="group flex items-center gap-2.5 md:gap-5 w-full p-2.5 md:p-5 text-left rounded-xl border-2 transition-all"
          >
            <span className="flex justify-center items-center shrink-0 w-8 h-8 md:w-12 md:h-12 text-lg font-bold rounded-md md:rounded-xl border-2 transition-all">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="flex-1 text-base md:text-lg text-white font-medium">{option}</span>
          </button>
        ))}
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">Select an answer to continue. You cannot go back!</p>
      </div>
    </div>
  );
};

export default memo(QuizCard);
