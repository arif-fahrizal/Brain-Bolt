import { AlertCircle, Clock } from 'lucide-react';
import { useMemo } from 'react';

interface QuizTimerProps {
  initialTimer: number;
  timer: number;
}

export default function QuizTimer({ initialTimer, timer }: QuizTimerProps) {
  const { minutes, seconds, timePercentage } = useMemo(
    () => ({
      minutes: Math.floor(timer / 60),
      seconds: timer % 60,
      timePercentage: (timer / initialTimer || 30) * 100,
    }),
    [initialTimer, timer]
  );
  const urgent = timer <= 10;

  return (
    <div className="surface mb-3 w-full rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <Clock className={`h-4 w-4 ${urgent ? 'text-red-400' : 'text-[#ff0513]'}`} /> Time remaining
        </div>
        <span className={`font-manrope text-xl font-bold ${urgent ? 'text-red-400' : 'text-white'}`}>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${urgent ? 'bg-red-500' : 'bg-[#ff0513]'}`}
          style={{ width: `${timePercentage}%` }}
        />
      </div>
      {urgent && (
        <div className="mt-3 flex items-center gap-2 text-xs text-red-400">
          <AlertCircle className="h-4 w-4" /> Time is almost up!
        </div>
      )}
    </div>
  );
}
