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

  const handleStartQuiz = () => {
    if (!user.status) {
      navigate('/sign-in');
    } else if (questions.length > 0) {
      navigate('/quiz');
    } else {
      onTrue();
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-80 h-80 -top-40 -right-40 rounded-full animate-blob mix-blend-multiply filter blur-xl bg-purple-500 opacity-20" />
        <div className="absolute w-80 h-80 -bottom-40 -left-40 rounded-full animate-blob delay-200 mix-blend-multiply filter blur-xl bg-blue-500 opacity-20" />
        <div className="absolute w-80 h-80 top-1/2 left-1/2 rounded-full animate-blob delay-300 mix-blend-multiply filter blur-xl bg-pink-500 opacity-20" />
      </div>

      <div className="container relative mx-auto z-10">
        <Header />
        <main>
          <section id="hero-section" className="flex flex-col justify-center items-center gap-5 md:gap-10 h-dvh">
            <HeroSection handleStartQuiz={handleStartQuiz} />
            <StatsSection />
          </section>
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
