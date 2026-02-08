export const getScoreGradient = (score: number) => {
  if (score >= 80) return 'from-green-400 to-emerald-500';
  if (score >= 60) return 'from-yellow-400 to-orange-500';
  return 'from-red-400 to-rose-500';
};

export const getScoreText = (score: number) => {
  if (score >= 80) return 'Congratulations! 🎉';
  if (score >= 60) return 'Good Try! 💪';
  return 'Better Luck Next Time! 🤞';
};