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

export const findUserByUsername = (username: string): User | undefined => {
  const users = getStoredUsers();
  return users.find(u => u.username === username);
};

export const updateUserStatus = (username: string, status: boolean): User[] => {
  const users = getStoredUsers();
  return users.map(u => (u.username === username ? { ...u, status } : u));
};

export const updateUserInStorage = (updatedUser: User): void => {
  try {
    const users = JSON.parse(localStorage.getItem('user') || '[]');
    const updatedUsers = users.map((u: User) => (u.username === updatedUser.username ? updatedUser : u));
    localStorage.setItem('user', JSON.stringify(updatedUsers));
  } catch (error) {
    console.error('Failed to update user:', error);
  }
};
