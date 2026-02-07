import type { SignUpUser, User } from '../types/auth.types';
import { findUserByUsername, updateUserStatus } from '../utils/auth.utils';

const STORAGE_KEY = 'user';
const MIN_USERNAME_LENGTH = 8;
const MIN_PASSWORD_LENGTH = 8;

const getStoredUser = (): User[] | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to parse stored user:', error);
    return null;
  }
};

const setStoredUser = (user: User[] | null): void => {
  try {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (error) {
    console.error('Failed to store user:', error);
    throw new Error('Storage operation failed');
  }
};

export const signIn = (credentials: Pick<User, 'username' | 'password'>) => {
  try {
    const { username, password } = credentials;

    if (!username?.trim() || !password?.trim()) {
      return { status: false, message: 'Username and password are required' };
    }

    const user = findUserByUsername(username);

    if (!user) {
      return { status: false, message: 'Invalid username or password' };
    }

    if (user.password !== password) {
      return { status: false, message: 'Invalid password' };
    }

    const updatedUsers = updateUserStatus(username, true);
    setStoredUser(updatedUsers);

    return { status: true, user: updatedUsers };
  } catch (error) {
    console.error(error);
  }
};

export const signUp = (user: SignUpUser) => {
  try {
    const { username, password, confirmPassword } = user;

    if (!username?.trim() || !password?.trim() || !confirmPassword?.trim()) {
      return { status: false, message: 'All fields are required' };
    }

    if (username.length < MIN_USERNAME_LENGTH) {
      return { status: false, message: `Username must be at least ${MIN_USERNAME_LENGTH} characters` };
    }

    if (password.length < MIN_PASSWORD_LENGTH) {
      return {
        status: false,
        message: `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
      };
    }

    if (password !== confirmPassword) {
      return { status: false, message: 'Passwords do not match' };
    }

    if (findUserByUsername(username)) {
      return {
        status: false,
        message: 'Username already exists',
      };
    }

    const users = getStoredUser() || [];
    const updatedUser = [...users, { username, password, status: false }];

    setStoredUser(updatedUser);

    return { status: true, message: 'Sign Up Success', user: updatedUser };
  } catch (error) {
    console.error(error);
  }
};

export const signOut = () => {
  try {
    const storedUser = getStoredUser();

    if (!storedUser) {
      return { status: true, message: 'No active session found' };
    }

    const isUserOnline = storedUser.find(u => u.status === true);

    if (!isUserOnline) {
      return { status: true, message: 'No active session found' };
    }

    const updatedUser = storedUser.map(u => (u.status === true ? { ...u, status: false } : u));
    setStoredUser(updatedUser);

    return {
      status: true,
      message: 'Signed out successfully',
      user: updatedUser,
    };
  } catch (error) {
    console.error(error);
  }
};
