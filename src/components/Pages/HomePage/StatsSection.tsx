import { Star, Target, Users } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Active players', value: '15.2k' },
  { icon: Target, label: 'Quizzes completed', value: '45.8k' },
  { icon: Star, label: 'Average rating', value: '4.8' },
];

export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 border-y border-white/[0.07] md:grid-cols-3">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`flex items-center gap-4 px-5 py-6 ${
            index > 0 ? 'border-t border-white/[0.07] md:border-l md:border-t-0' : ''
          }`}
        >
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#ff0513]/20 bg-[#ff0513]/[0.08]">
            <stat.icon className="h-5 w-5 text-[#ff0513]" />
          </div>
          <div>
            <p className="font-manrope text-2xl font-bold text-white">{stat.value}</p>
            <p className="mt-0.5 text-sm text-zinc-500">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
