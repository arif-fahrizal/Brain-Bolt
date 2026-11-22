import { Award, Gauge, Star, Trophy } from 'lucide-react';

const features = [
  { icon: Gauge, title: 'Fast & focused', text: 'Short quizzes designed for productive breaks.' },
  { icon: Trophy, title: 'Level up', text: 'Build consistency and chase your next achievement.' },
  { icon: Star, title: 'Learn while playing', text: 'Expand your knowledge through engaging challenges.' },
  { icon: Award, title: 'Track your progress', text: 'View your quiz performance in one place.' },
];

export default function FeaturesSection() {
  return (
    <section className="pb-24">
      <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-10">
        <div className="mb-10 max-w-xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#ff0513]">Why BrainBolt</p>
          <h3 className="font-manrope text-3xl font-bold tracking-tight sm:text-4xl">Learning feels lighter.</h3>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2">
          {features.map(feature => (
            <div key={feature.title} className="bg-[#0f0f38] p-6 sm:p-7">
              <div className="mb-5 grid h-10 w-10 place-items-center rounded-xl border border-[#ff0513]/20 bg-[#ff0513]/[0.08]">
                <feature.icon className="h-5 w-5 text-[#ff0513]" />
              </div>
              <h4 className="font-manrope font-bold">{feature.title}</h4>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
