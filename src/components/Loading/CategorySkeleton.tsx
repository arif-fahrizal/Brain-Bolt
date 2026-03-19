export default function CategorySkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3.5 lg:gap-5 max-w-6xl mx-auto">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={'category-skeleton' + index}
          className="grid gap-2.5 p-6 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-md"
        >
          <div className="flex items-start justify-between mb-5">
            <div className="p-9 rounded-2xl transition-all animate-pulse bg-white/10" />
            <div className="px-5 py-2.5 rounded-full animate-pulse bg-white/10"></div>
          </div>
          <h4 className="w-1/2 py-2.5 rounded-2xl transition-all animate-pulse bg-white/10" />
          <div className="w-full py-2.5 rounded-2xl transition-all animate-pulse bg-white/10" />
          <button type="button" className="w-full mt-auto py-5 rounded-xl transition-all animate-pulse bg-white/10" />
        </div>
      ))}
    </div>
  );
}
