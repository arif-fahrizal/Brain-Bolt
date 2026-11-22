import { Settings } from 'lucide-react';
import { Activity, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useQuestions from '../../../hooks/useQuestions';
import { fetchAPI } from '../../../lib/api';
import type { Category } from '../../../types/category.types';
import { DIFFICULTY_OPTIONS } from '../../../utils/difficulty.utils';
import { stripCategoryPrefix } from '../../../utils/stripCategoryPrefix.utils';
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

  const mappedCategories = categories.map((category: Category) => ({
    label: stripCategoryPrefix(category.name),
    value: category.id,
  }));
  const initialValue = categories.find((category: Category) => category.id === initialCategory)?.name;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const searchParams = new URLSearchParams();
      searchParams.set('type', 'multiple');

      const isValidCategory = categories.some((category: Category) => category.id === params.category);
      const randomId = categories[Math.floor(Math.random() * categories.length)].id;
      if (!isValidCategory) params.category = randomId;

      (Object.keys(params) as Array<keyof FormParams>).forEach(key => {
        const value = params[key];
        if (value !== '' && value !== 0) searchParams.set(key, String(value));
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
      <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/75 backdrop-blur-md" onClick={onClose} />
        <div className="relative w-full max-w-xl rounded-[2rem] border border-white/[0.1] bg-[#0f0f38]/95 p-5 shadow-[0_30px_100px_rgba(0,0,0,.6)] sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#ff0513]/20 bg-[#ff0513]/[0.08]">
              <Settings className="h-5 w-5 text-[#ff0513]" />
            </div>
            <div>
              <h2 className="font-manrope text-xl font-bold">Set up quiz</h2>
              <p className="mt-1 text-sm text-zinc-500">Customize your challenge</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Number of questions"
              type="number"
              min={10}
              max={50}
              defaultValue={10}
              onChange={({ target }) => setParams(prev => ({ ...prev, amount: Number(target.value) }))}
              required
            />
            <Select
              label="Category"
              initialValue={initialValue ? stripCategoryPrefix(initialValue) : ''}
              options={mappedCategories || []}
              onChange={value => setParams(prev => ({ ...prev, category: Number(value) }))}
            />
            <Select
              label="Difficulty"
              options={DIFFICULTY_OPTIONS}
              onChange={value => setParams(prev => ({ ...prev, difficulty: String(value) }))}
            />
            <button className="btn-primary mt-2 w-full px-4 py-3.5">Create & start quiz</button>
            <p className="text-center text-xs text-zinc-600">Category and difficulty can be selected randomly.</p>
          </form>
        </div>
      </div>
    </Activity>
  );
}
