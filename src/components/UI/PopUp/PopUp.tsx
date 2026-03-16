import { Settings, X } from 'lucide-react';
import { Activity, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useQuestions from '../../../hooks/useQuestions';
import { fetchAPI } from '../../../lib/api';
import type { Category } from '../../../types/category.types';
import { difficulty } from '../../../utils/difficulty.utils';
import Input from '../Inputs/Input';
import Select from '../Inputs/Select';

interface QuizSetupPopupProps {
  initialCategory?: number;
  isOpen: boolean;
  onClose: () => void;
}

interface FormParams {
  amount: number;
  category: number;
  difficulty: string;
}

export default function QuizSetupPopup({ initialCategory = 0, isOpen, onClose }: QuizSetupPopupProps) {
  const navigate = useNavigate();
  const [params, setParams] = useState<FormParams>({
    amount: 10,
    category: initialCategory,
    difficulty: '',
  });

  const { categories, setQuestions } = useQuestions();

  const mappedCategories = categories.map((category: Category) => ({ label: category.name, value: category.id }));
  const initialValue = categories.find((category: Category) => category.id === initialCategory)?.name;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const searchParams = new URLSearchParams();
      searchParams.set('type', 'multiple');

      (Object.keys(params) as Array<keyof FormParams>).forEach(key => {
        const value = params[key];
        if (value === '' || value === 0) return;
        searchParams.set(key, String(value));
      });

      const data = await fetchAPI(`/api.php?${searchParams.toString()}`);
      setQuestions(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      onClose();
      navigate('/quiz');
    }
  };

  return (
    <Activity mode={isOpen ? 'visible' : 'hidden'}>
      <div className="fixed flex items-center justify-center p-4 inset-0 z-50">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
        <div className="relative max-w-2xl w-full">
          <div className="absolute w-32 h-32 -top-6 -right-6 rounded-full bg-purple-500/30 blur-2xl" />
          <div className="absolute w-32 h-32 -bottom-6 -left-6 rounded-full bg-pink-500/30 blur-2xl" />

          <div className="p-8 md:p-12 rounded-3xl border border-white/20 bg-linear-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/10">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Create Your Quiz</h2>
                  <p className="text-white/70">Customize your challenge</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 rounded-lg transition-colors hover:bg-white/10">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Input
                label="Question Count"
                type="number"
                min={10}
                defaultValue={10}
                onChange={({ target }) => setParams(prev => ({ ...prev, amount: Number(target.value) }))}
                required
              />
              <Select
                label="Select Category"
                initialValue={initialValue}
                options={mappedCategories || []}
                onChange={value => setParams(prev => ({ ...prev, category: Number(value) }))}
              />
              <Select
                label="Select Difficulty"
                options={difficulty}
                onChange={value => setParams(prev => ({ ...prev, difficulty: String(value) }))}
              />
              <button className="w-full p-2.5 text-white rounded-full bg-linear-to-r from-purple-500 to-pink-500">
                Generate & Start Quiz
              </button>
              <p className="text-xs text-gray-300 italic">
                If you don&apos;t select a category & difficulty, a random one will be selected
              </p>
            </form>
          </div>
        </div>
      </div>
    </Activity>
  );
}
