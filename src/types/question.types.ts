export interface Question {
  category: string;
  correct_answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface Answer {
  correctAnswer: string;
  selectedAnswer: string;
}

export interface QuizHistory {
  answers: Answer[];
  category: string;
  date: string;
  difficulty: string;
  totalQuestions: number;
}
