import { CircleStar, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import useBoolean from '../../../hooks/useBoolean';
import { fetchAPI } from '../../../lib/api';
import type { Category } from '../../../types/category.types';
import { CATEGORY_MAPPINGS } from '../../../utils/categories';
import QuizSetupPopup from '../../UI/PopUp/PopUp';

export default function CategoriesSection() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | number>('');

  const isModalOpen = useBoolean();

  useEffect(() => {
    const fetchCategories = async () => {
      const isCategoriesExist = localStorage.getItem('categories');

      if (isCategoriesExist) return setCategories(JSON.parse(isCategoriesExist));

      try {
        const categories = await fetchAPI('/api_category.php');
        localStorage.setItem('categories', JSON.stringify(categories.trivia_categories));
        setCategories(categories.trivia_categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h3 className="mb-4 text-4xl text-white font-bold">Choose Your Category</h3>
        <p className="text-lg text-gray-300">Pick a topic and start testing your knowledge</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map(category => (
          <div
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`group p-6 rounded-2xl border-2 transition-all bg-white/10 backdrop-blur-md cursor-pointer hover:scale-105 hover:shadow-2xl ${
              selectedCategory === category.id
                ? 'border-purple-500 bg-white/20'
                : 'border-white/20 hover:border-white/40'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`flex justify-center items-center w-16 h-16 text-3xl ${CATEGORY_MAPPINGS[category.name].color} rounded-2xl transition-all transform bg-linear-to-br group-hover:scale-110 group-hover:rotate-6`}
              >
                {CATEGORY_MAPPINGS[category.name].icon}
              </div>
              <div className="flex items-center gap-1 px-3 py-1 text-xs text-white rounded-full bg-white/10">
                <CircleStar className="w-4 h-4 text-yellow-400" />
                <span>{CATEGORY_MAPPINGS[category.name].rating}</span>
              </div>
            </div>

            <h4 className="mb-2 text-xl text-white font-bold">{category.name}</h4>

            <div className="flex justify-between items-center gap-5 mb-4 text-sm text-gray-400">
              <span title={CATEGORY_MAPPINGS[category.name].description} className="line-clamp-1">
                {CATEGORY_MAPPINGS[category.name].description}
              </span>
            </div>

            <button
              type="button"
              onClick={isModalOpen.toggle}
              className={`flex justify-center items-center gap-2 w-full mt-auto py-3 ${CATEGORY_MAPPINGS[category.name].color} text-white font-semibold rounded-xl transition-all transform translate-y-2 bg-linear-to-r opacity-0 group-hover:opacity-100 group-hover:translate-y-0`}
            >
              <Play className="w-4 h-4" />
              Start Quiz
            </button>
          </div>
        ))}
        <QuizSetupPopup isOpen={isModalOpen.value} onClose={isModalOpen.toggle} />
      </div>
    </section>
  );
}
