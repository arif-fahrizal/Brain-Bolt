import { lazy, Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Layouts/Footer';
import Header from '../components/Layouts/Header';
import CategorySkeleton from '../components/Loading/CategorySkeleton';
import FeaturesSection from '../components/Pages/HomePage/FeaturesSection';
import HeroSection from '../components/Pages/HomePage/HeroSection';
import StatsSection from '../components/Pages/HomePage/StatsSection';
import QuizSetupPopup from '../components/UI/PopUp/PopUp';
import useAuth from '../hooks/useAuth';
import useBoolean from '../hooks/useBoolean';
import useQuestions from '../hooks/useQuestions';

const CategoriesSection = lazy(() => import('../components/Pages/HomePage/CategoriesSection'));

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const { user } = useAuth();
  const { questions, categories } = useQuestions();
  const { value: isModalOpen, onTrue, onFalse } = useBoolean();

  console.log(categories.map(category => category.id));

  const handleStartQuiz = () => {
    if (!user.status) navigate('/sign-in');
    else if (questions.length > 0) navigate('/quiz');
    else onTrue();
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-22rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full border border-[#ff0513]/10 bg-[#ff0513]/[0.07] blur-3xl" />
        <div className="absolute right-[-12rem] top-[32rem] h-[28rem] w-[28rem] rounded-full bg-[#0f0f38]/90 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <Header />
        <main>
          <HeroSection handleStartQuiz={handleStartQuiz} />
          <StatsSection />
          <Suspense fallback={<CategorySkeleton />}>
            <CategoriesSection
              categories={categories}
              handleStartQuiz={handleStartQuiz}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </Suspense>
          <FeaturesSection />
          <QuizSetupPopup
            key={selectedCategory}
            initialCategory={selectedCategory}
            isOpen={isModalOpen}
            onClose={onFalse}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}
