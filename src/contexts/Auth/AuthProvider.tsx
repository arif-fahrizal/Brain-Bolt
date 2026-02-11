import { useEffect, useState } from 'react';
import type { User } from '../../types/auth.types';
import { getStoredUsers, updateUserInStorage } from '../../utils/auth.utils';
import AuthContext from './AuthContext';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const getUser = () => {
      const users = getStoredUsers();
      const currentUser = users.find(u => u.status === true) || null;
      setUser(currentUser || ({} as User));
    };

    getUser();
  }, []);

  useEffect(() => {
    const saveUser = () => {
      if (!user) return;

      updateUserInStorage(user);
    };

    window.addEventListener('beforeunload', saveUser);

    return () => {
      window.removeEventListener('beforeunload', saveUser);
    };
  }, [user]);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
}
