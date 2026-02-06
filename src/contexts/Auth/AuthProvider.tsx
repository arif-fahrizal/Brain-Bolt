import { useEffect, useState } from 'react';
import type { User } from '../../types/auth.types';
import AuthContext from './AuthContext';

export default function AuthProvider() {
  const [user, setUser] = useState<User>({ username: '', password: '' });

  useEffect(() => {
    const loadUser = () => {
      const data = localStorage.getItem('user');
      if (data) setUser(JSON.parse(data));
    };

    loadUser();
  }, []);

  return <AuthContext.Provider value={{ user, setUser }}></AuthContext.Provider>;
}
