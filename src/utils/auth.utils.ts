import type { User } from '../types/auth.types';

const STORAGE_KEY = 'user';

export const getStoredUsers = (): User[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to parse stored user:', error);
    return [];
  }
};

export const setStoredUsers = (users: User[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  } catch (error) {
    console.error('Failed to store user:', error);
    throw new Error('Storage operation failed');
  }
};

export const findUserByUsername = (username: string): User | undefined => {
  const users = getStoredUsers();
  return users.find(u => u.username === username);
};

export const updateUserStatus = (username: string, status: boolean): User[] => {
  const users = getStoredUsers();
  return users.map(u => (u.username === username ? { ...u, status } : u));
};

export const getCurrentUser = (): User | null => {
  const users = getStoredUsers();
  return users.find(u => u.status === true) || null;
};
