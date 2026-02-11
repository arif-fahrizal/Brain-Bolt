export const getScoreConfig = (score: number) => {
  const config: Record<number, { gradient: string; text: string }> = {
    80: { gradient: 'from-green-400 to-emerald-500', text: 'Congratulations! 🎉' },
    60: { gradient: 'from-yellow-400 to-orange-500', text: 'Good Try! 💪' },
  };

  return config[score] || { gradient: 'from-red-400 to-rose-500', text: 'Better Luck Next Time! 🤞' };
};
