import { Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { signOut } from '../../services/auth.service';
import type { User } from '../../types/auth.types';

export default function Header() {
  const navigate = useNavigate();

  const { user, setUser } = useAuth();

  const handleSignOut = () => {
    navigate('/sign-in');
    setUser({} as User);
    signOut();
  };

  return (
    <header className="container fixed top-0 left-0 right-0 mx-auto px-4 py-6 z-99">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex justify-center items-center w-10 h-10 rounded-lg bg-linear-to-br from-purple-500 to-pink-500">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl text-white font-bold">BrainBolt</h1>
        </Link>
        <div className="flex items-center text-white gap-5">
          {user.status ? (
            <>
              <span className="">{user.username}</span>
              <button onClick={handleSignOut} className="btn-primary px-6 py-2">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/sign-in" className="px-4 py-2 transition-colors hover:text-purple-300">
                Login
              </Link>
              <Link to="/sign-up" className="btn-primary px-6 py-2">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
