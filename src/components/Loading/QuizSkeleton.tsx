export default function QuizSkeleton() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen p-4 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="min-w-75 max-w-250 w-full mb-2.5 p-5 rounded-2xl border border-white/20 animate-pulse bg-white/10 backdrop-blur-lg shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="space-y-2">
            <div className="w-32 h-5 rounded-lg bg-white/20" />
            <div className="w-24 h-3.5 rounded-lg bg-white/10" />
          </div>
          <div className="space-y-2 text-right">
            <div className="w-16 h-3.5 rounded-lg bg-white/10 ml-auto" />
            <div className="w-20 h-5 rounded-lg bg-white/20 ml-auto" />
          </div>
        </div>

        <div className="w-full h-4 mb-2 rounded-full bg-white/20" />
        <div className="w-16 h-3 rounded-lg bg-white/10 ml-auto" />
      </div>

      <div className="min-w-75 max-w-250 w-full mb-2.5 p-5 rounded-2xl border border-white/20 animate-pulse bg-white/10 backdrop-blur-lg shadow-xl">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-white/20" />
            <div className="w-20 h-7 rounded-lg bg-white/20" />
          </div>
          <div className="w-20 h-7 rounded-lg bg-white/20" />
        </div>
        <div className="w-full h-4 rounded-full bg-white/20" />
      </div>

      <div className="min-w-75 max-w-250 w-full mb-2.5 p-5 rounded-3xl border border-white/20 animate-pulse bg-white/10 backdrop-blur-lg shadow-2xl">
        <div className="mb-8">
          <div className="w-28 h-8 mb-4 rounded-full bg-purple-500/20" />

          <div className="space-y-3">
            <div className="w-full h-8 rounded-lg bg-white/20" />
            <div className="w-4/5 h-8 rounded-lg bg-white/20" />
            <div className="w-3/5 h-8 rounded-lg bg-white/20" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 md:gap-5 w-full p-2.5 md:p-5 rounded-xl border-3 border-white/10"
            >
              <div className="shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-md md:rounded-xl bg-white/20" />
              <div className="flex-1 space-y-2">
                <div className="w-full h-4 rounded-lg bg-white/20" />
                <div className="w-3/4 h-4 rounded-lg bg-white/10" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <div className="w-72 h-3.5 rounded-lg bg-white/10" />
        </div>
      </div>
    </div>
  );
}
