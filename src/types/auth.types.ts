import type { QuizHistory } from './question.types';

export interface User {
  username: string;
  password: string;
  quizHistory?: QuizHistory[];
  status: boolean;
}

export interface SignUpUser extends Omit<User, 'quizHistory' | 'status'> {
  confirmPassword: string;
}
