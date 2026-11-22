import { ArrowRight, BrainCircuit, ChevronRight, Play } from 'lucide-react';

export default function HeroSection({ handleStartQuiz }: { handleStartQuiz: () => void }) {
  return (
    <section className="grid min-h-[590px] items-center gap-10 px-1 py-20 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
      <div className="max-w-3xl">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#ff0513]/20 bg-[#ff0513]/[0.08] px-3 py-1.5 text-sm text-red-100">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff0513] shadow-[0_0_12px_rgba(255,5,19,.9)]" />
          Daily knowledge challenges
        </div>

        <h2 className="font-manrope text-[clamp(3.4rem,8vw,6.8rem)] font-extrabold leading-[0.92] tracking-[-0.07em] text-white">
          Think fast.
          <span className="mt-2 block bg-gradient-to-r from-[#ff0513] via-white to-[#ff0513] bg-clip-text text-transparent">
            Learn faster.
          </span>
        </h2>

        <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
          Short, focused quizzes that sharpen your curiosity and turn every answer into a step forward.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <button onClick={handleStartQuiz} className="btn-primary group px-6 py-3.5 text-base sm:px-7">
            <Play className="h-4 w-4 fill-current" />
            Start quiz
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#category-section"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-6 py-3.5 text-zinc-200 transition-all hover:border-[#ff0513]/30 hover:bg-[#ff0513]/[0.06]"
          >
            Explore categories
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="relative mx-auto hidden h-[390px] w-full max-w-[430px] lg:block">
        <div className="surface absolute left-8 top-6 h-[330px] w-[330px] rotate-6 rounded-[3rem] border-[#ff0513]/10 bg-[#ff0513]/[0.035]" />
        <div className="absolute left-0 top-14 grid h-[320px] w-[360px] place-items-center rounded-[3rem] border border-white/[0.09] bg-[#0f0f38]/95 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-xl">
          <div className="relative grid h-44 w-44 place-items-center rounded-full border border-[#ff0513]/25 bg-[#ff0513]/[0.07] shadow-[0_0_70px_rgba(255,5,19,.16)]">
            <div className="absolute inset-4 rounded-full border border-dashed border-red-300/25 animate-[spin_24s_linear_infinite]" />
            <BrainCircuit className="h-20 w-20 text-[#ff0513]" strokeWidth={1.25} />
          </div>
          <div className="absolute right-[-18px] top-12 rounded-2xl border border-white/10 bg-[#17174a] px-4 py-3 shadow-xl">
            <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">Streak</p>
            <p className="mt-1 font-manrope text-xl font-bold">12 days</p>
          </div>
          <div className="absolute bottom-9 left-[-28px] rounded-2xl border border-white/10 bg-[#17174a] px-4 py-3 shadow-xl">
            <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">Improve</p>
            <p className="mt-1 font-manrope text-xl font-bold text-[#ff0513]">+18%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
