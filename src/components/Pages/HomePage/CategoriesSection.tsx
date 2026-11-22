import { ArrowUpRight, CircleStar } from 'lucide-react';
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
    <section id="category-section" className="py-24">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#ff0513]">Choose a challenge</p>
          <h3 className="font-manrope text-3xl font-bold tracking-tight sm:text-4xl">Popular categories</h3>
        </div>
        <p className="hidden max-w-sm text-right text-sm leading-6 text-zinc-400 md:block">
          Find a topic you know or challenge yourself to learn something new.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => {
          const mapping = CATEGORY_MAPPINGS[category.name] ?? {
            icon: '🧠',
            color: 'from-[#0f0f38] to-[#ff0513]',
            rating: '4.5',
            description: 'A fun knowledge challenge',
          };
          const selected = selectedCategory === category.id;

          return (
            <article
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              style={{ animationDelay: `${Math.min(index * 60, 420)}ms` }}
              className={`category-card group relative min-h-48 cursor-pointer overflow-hidden rounded-2xl border p-5 transition-all duration-500 ease-out ${
                selected
                  ? 'border-[#ff0513]/70 bg-[#ff0513]/10 shadow-[0_18px_50px_rgba(255,5,19,.12)]'
                  : 'border-white/[0.07] bg-white/[0.025] hover:-translate-y-2 hover:border-[#ff0513]/25 hover:bg-white/[0.045]'
              }`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${mapping.color} text-xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}
                >
                  {mapping.icon}
                </div>
                <div className="flex items-center gap-1 rounded-full border border-white/[0.07] bg-black/20 px-2 py-1 text-xs text-zinc-400">
                  <CircleStar className="h-3.5 w-3.5 text-[#ff0513]" />
                  {mapping.rating}
                </div>
              </div>

              <h4 title={stripCategoryPrefix(category.name)} className="mt-6 font-manrope text-lg font-bold text-white">
                {stripCategoryPrefix(category.name)}
              </h4>
              <p title={mapping.description} className="mt-1 line-clamp-2 text-sm leading-6 text-zinc-400">
                {mapping.description}
              </p>

              <button
                type="button"
                onClick={event => {
                  event.stopPropagation();
                  setSelectedCategory(category.id);
                  handleStartQuiz();
                }}
                className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#ff7079] opacity-80 transition-all duration-300 group-hover:gap-2 group-hover:opacity-100"
              >
                Start quiz{' '}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
