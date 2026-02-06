export interface User {
  username: string;
  password: string;
  quizHistory?: {
    category: string;
    date: string;
    difficulty: string;
    score: number;
  };
}

export interface SignUpUser extends User {
  confirmPassword: string;
}
