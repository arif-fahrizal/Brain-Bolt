import { createContext } from 'react';
import type { User } from '../../types/auth.types';

interface AuthContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
export default AuthContext;
