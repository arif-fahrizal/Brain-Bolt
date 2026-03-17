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
    <header className="container sticky top-0 left-0 right-0 mx-auto p-4 backdrop-blur-xl z-99">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex justify-center items-center w-9 h-9 md:w-12 md:h-12 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 overflow-hidden">
            <img src="./images/brain-bolt-white.png" alt="" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-xl md:text-2xl text-white font-bold">BrainBolt</h1>
        </Link>
        <div className="flex items-center text-white gap-5">
          {user.status ? (
            <>
              <span className="hidden md:inline-block">{user.username}</span>
              <button onClick={handleSignOut} className="btn-primary px-4 py-1.5 md:px-6 md:py-2 text-sm md:text-base">
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
