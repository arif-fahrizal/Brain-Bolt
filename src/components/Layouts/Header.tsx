import { LogOut, UserRound } from 'lucide-react';
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
    <header className="sticky top-3 z-50 mx-auto mt-3 rounded-2xl border border-white/[0.08] bg-[#0f0f38]/90 px-3 py-2.5 backdrop-blur-xl sm:px-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" aria-label="BrainBolt home">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-[#ff0513]/30 bg-[#ff0513]/10 sm:h-10 sm:w-10">
            <img src="/images/brain-bolt-white.png" alt="" className="h-7 w-7 object-contain" />
          </div>
          <h1 className="font-manrope text-lg font-extrabold tracking-tight sm:text-xl">
            Brain<span className="text-[#ff0513]">Bolt</span>
          </h1>
        </Link>

        <nav className="flex items-center gap-1.5 text-sm sm:gap-2">
          {user.status ? (
            <>
              <span className="hidden items-center gap-2 rounded-xl px-3 py-2 text-zinc-300 md:flex">
                <UserRound className="h-4 w-4 text-[#ff0513]" />
                {user.username}
              </span>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/5"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link to="/sign-in" className="rounded-xl px-3 py-2 text-zinc-300 transition-colors hover:text-white">
                Sign In
              </Link>
              <Link to="/sign-up" className="btn-primary px-4 py-2.5 sm:px-5">
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
