import { AlertCircle, Clock } from 'lucide-react';

const timeLeft = 3;

export default function QuizTimer() {
  const timePercentage = (timeLeft / 30) * 100;
  return (
    <div className="min-w-75 max-w-250 w-full mb-2.5 p-5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-xl">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Clock className={`w-6 h-6 ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-blue-400'}`} />
          <span className="text-white font-semibold">Time Remaining</span>
        </div>
        <span className={`text-2xl md:text-3xl font-bold ${timeLeft <= 10 ? 'text-red-400' : 'text-white'}`}>
          {timeLeft}s
        </span>
      </div>

      {/* Timer Progress Bar */}
      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ${
            timeLeft <= 10 ? 'bg-linear-to-r from-red-500 to-orange-500' : 'bg-linear-to-r from-blue-500 to-cyan-500'
          }`}
          style={{ width: `${timePercentage}%` }}
        ></div>
      </div>

      {timeLeft <= 10 && (
        <div className="flex items-center gap-2 mt-3 text-sm text-red-400">
          <AlertCircle className="w-4 h-4" />
          <span>Hurry up! Time is running out!</span>
        </div>
      )}
    </div>
  );
}
