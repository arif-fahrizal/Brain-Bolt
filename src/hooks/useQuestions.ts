import { useContext } from 'react';
import QuestionsContext from '../contexts/Questions/QuestionsContext';

export default function useQuestions() {
  const context = useContext(QuestionsContext);

  if (!context) {
    throw new Error('useQuestions must be used within a QuestionsProvider');
  }

  return context;
}
