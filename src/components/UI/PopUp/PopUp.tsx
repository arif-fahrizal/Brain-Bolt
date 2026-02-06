import { Settings, X } from 'lucide-react';
import type { Category } from '../../../types/category.types';
import { difficulty } from '../../../utils/difficulty';
import Input from '../Inputs/Input';
import Select from '../Inputs/Select';

interface QuizSetupPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuizSetupPopup({ isOpen, onClose }: QuizSetupPopupProps) {
  const isCategoriesExist = localStorage.getItem('categories');
  const category = isCategoriesExist ? JSON.parse(isCategoriesExist) : ([] as Category[]);
  const categories = category.map((category: Category) => ({ label: category.name, value: category.id }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl">
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl" />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-500/30 rounded-full blur-2xl" />

        <div className="p-8 md:p-12 rounded-3xl border border-white/20 bg-linear-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Create Your Quiz</h2>
                <p className="text-white/70">Customize your challenge</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Input label="Question Count" type="number" min={10} defaultValue={10} />
            <Select label="Select Category" options={categories || []} />
            <Select label="Select Difficulty" options={difficulty} />
            <button className="w-full p-2.5 rounded-full duration-300 bg-white hover:bg-gray-200">
              Generate & Start Quiz
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
