import { Award, Star, Trophy, Zap } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="p-8 md:p-12 rounded-3xl border border-white/20 bg-linear-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md">
          <h3 className="mb-8 text-3xl text-center text-white font-bold">Why Choose QuizMaster?</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-xl bg-purple-500/30">
                <Zap className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <h4 className="mb-2 text-white font-semibold">Quick & Fun</h4>
                <p className="text-sm text-gray-300">5-minute quizzes that fit into your busy schedule</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-xl bg-blue-500/30">
                <Trophy className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h4 className="mb-2 text-white font-semibold">Compete & Win</h4>
                <p className="text-sm text-gray-300">Climb the leaderboard and earn achievements</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-xl bg-pink-500/30">
                <Star className="w-6 h-6 text-pink-300" />
              </div>
              <div>
                <h4 className="mb-2 text-white font-semibold">Learn & Grow</h4>
                <p className="text-sm text-gray-300">Expand your knowledge with detailed explanations</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-xl bg-green-500/30">
                <Award className="w-6 h-6 text-green-300" />
              </div>
              <div>
                <h4 className="mb-2 text-white font-semibold">Track Progress</h4>
                <p className="text-sm text-gray-300">Monitor your improvement with detailed stats</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
