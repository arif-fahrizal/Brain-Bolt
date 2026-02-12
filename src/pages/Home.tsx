import Footer from '../components/Layouts/Footer';
import Header from '../components/Layouts/Header';
import CategoriesSection from '../components/Pages/HomePage/CategoriesSection';
import FeaturesSection from '../components/Pages/HomePage/FeaturesSection';
import HeroSection from '../components/Pages/HomePage/HeroSection';
import StatsSection from '../components/Pages/HomePage/StatsSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-80 h-80 -top-40 -right-40 rounded-full animate-blob mix-blend-multiply filter blur-xl bg-purple-500 opacity-20" />
        <div className="absolute w-80 h-80 -bottom-40 -left-40 rounded-full animate-blob delay-200 mix-blend-multiply filter blur-xl bg-blue-500 opacity-20" />
        <div className="absolute w-80 h-80 top-1/2 left-1/2 rounded-full animate-blob delay-300 mix-blend-multiply filter blur-xl bg-pink-500 opacity-20" />
      </div>

      <div className="container relative mx-auto z-10">
        <Header />
        <HeroSection />
        <StatsSection />
        <CategoriesSection />
        <FeaturesSection />
        <Footer />
      </div>
    </div>
  );
}
