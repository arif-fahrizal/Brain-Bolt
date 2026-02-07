import { useEffect, useState } from 'react';
import type { User } from '../../types/auth.types';
import { getStoredUsers } from '../../utils/auth.utils';
import AuthContext from './AuthContext';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const loadUser = () => {
      const users = getStoredUsers();
      const currentUser = users.find(u => u.status === true) || null;
      setUser(currentUser || ({} as User));
    };

    loadUser();
  }, []);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
}
