import { CircleStar, Play } from 'lucide-react';
import type { Category } from '../../../types/category.types';
import { CATEGORY_MAPPINGS } from '../../../utils/categories.utils';
import { stripCategoryPrefix } from '../../../utils/stripCategoryPrefix.utils';

interface CategoriesSectionProps {
  categories: Category[];
  selectedCategory: number;
  setSelectedCategory: (categoryId: number) => void;
  handleStartQuiz: () => void;
}

export default function CategoriesSection({
  categories = [],
  selectedCategory,
  setSelectedCategory,
  handleStartQuiz,
}: CategoriesSectionProps) {
  return (
    <section id="category-section" className="px-4 py-16">
      <div className="mb-12 text-center">
        <h3 className="mb-4 text-4xl text-white font-bold">Choose Your Category</h3>
        <p className="text-lg text-gray-300">Pick a topic and start testing your knowledge</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3.5 lg:gap-5 max-w-6xl mx-auto">
        {categories.map(category => (
          <div
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`group px-2.5 py-4 md:p-6 rounded-2xl border-2 transition-all bg-white/10 backdrop-blur-md cursor-pointer hover:scale-105 hover:shadow-2xl ${
              selectedCategory === category.id
                ? 'border-purple-500 bg-white/20'
                : 'border-white/20 hover:border-white/40'
            }`}
          >
            <div className="flex items-start justify-between mb-2 md:mb-4">
              <div
                className={`flex justify-center items-center w-12 h-12 md:w-16 md:h-16 text-3xl ${CATEGORY_MAPPINGS[category.name].color} rounded-2xl transition-all transform bg-linear-to-br group-hover:scale-110 group-hover:rotate-6`}
              >
                {CATEGORY_MAPPINGS[category.name].icon}
              </div>
              <div className="flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1 text-xs text-white rounded-full bg-white/10">
                <CircleStar className="w-4 h-4 text-yellow-400" />
                <span>{CATEGORY_MAPPINGS[category.name].rating}</span>
              </div>
            </div>

            <h4
              title={stripCategoryPrefix(category.name)}
              className="mb-2 text-sm md:text-xl text-white font-bold line-clamp-1"
            >
              {stripCategoryPrefix(category.name)}
            </h4>

            <span
              title={CATEGORY_MAPPINGS[category.name].description}
              className="md:mb-4 text-xs md:text-sm text-gray-400 line-clamp-1"
            >
              {CATEGORY_MAPPINGS[category.name].description}
            </span>

            <button
              type="button"
              onClick={handleStartQuiz}
              className={`flex justify-center items-center gap-2 w-full mt-auto py-1.5 md:py-3 ${CATEGORY_MAPPINGS[category.name].color} text-xs md:text-base text-white font-semibold rounded-xl transition-all transform translate-y-2 bg-linear-to-r md:opacity-0 group-hover:opacity-100 group-hover:translate-y-0`}
            >
              <Play className="w-4 h-4" />
              Start Quiz
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
