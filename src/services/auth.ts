import type { SignUpUser, User } from '../types/auth.types';

export const signIn = (user: Exclude<User, 'quizHistory'>) => {
  try {
    const { username, password } = user;

    const data = localStorage.getItem('user');

    if (!data) {
      return { status: false, message: 'User not found' };
    }

    const userData: User = JSON.parse(data);

    if (userData.username !== username) {
      return { status: false, message: 'User not found' };
    }

    if (userData.password !== password) {
      return { status: false, message: 'Password does not match' };
    }

    return { status: true, user };
  } catch (error) {
    console.error(error);
  }
};

export const signUp = (user: SignUpUser) => {
  try {
    const { username, password, confirmPassword } = user;

    if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
      return { status: false, message: 'All fields are required' };
    }

    if (password.length < 8) {
      return { status: false, message: 'Password minimal 8 characters' };
    }

    if (password !== confirmPassword) {
      return { status: false, message: 'Password does not match' };
    }

    localStorage.setItem('user', JSON.stringify({ username, password }));

    return { status: true, message: 'Sign Up Success', user: { username, password } };
  } catch (error) {
    console.error(error);
  }
};

export const signOut = () => {
  localStorage.removeItem('user');
  return { username: '', password: '' };
};
