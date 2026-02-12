import { Star, Trophy, Users } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Active Players', value: '15.2k', color: 'text-blue-500' },
  { icon: Trophy, label: 'Quizzes Completed', value: '45.8k', color: 'text-yellow-500' },
  { icon: Star, label: 'Average Rating', value: '4.8/5', color: 'text-purple-500' },
];

export default function StatsSection() {
  return (
    <section className="px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-white/20 transition-all bg-white/10 backdrop-blur-md hover:bg-white/15"
          >
            <div className="flex items-center gap-4">
              <div className={`flex justify-center items-center w-12 h-12 rounded-xl bg-white/10 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">{stat.label}</p>
                <p className="text-2xl text-white font-bold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
