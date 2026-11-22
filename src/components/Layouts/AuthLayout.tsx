import { ArrowLeft, BrainCircuit } from 'lucide-react';
import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

interface AuthLayoutProps {
  title?: string;
  error?: string;
  children: React.ReactNode;
}

export default function AuthLayout({ title, error, children }: AuthLayoutProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const authPage = ['/sign-in', '/sign-up'];
    if (user.status && authPage.includes(pathname)) navigate('/');
  }, [user, pathname, navigate]);

  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden px-4 py-10 text-white">
      <div className="pointer-events-none absolute left-1/2 top-[-20rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#ff0513]/[0.08] blur-[100px]" />
      <Link
        to="/"
        className="absolute left-5 top-5 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white sm:left-8 sm:top-8"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <div className="relative w-full max-w-md rounded-[2rem] border border-white/[0.09] bg-[#0f0f38]/95 p-6 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-xl sm:p-9">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-[#ff0513]/30 bg-[#ff0513]/[0.09]">
            <BrainCircuit className="h-7 w-7 text-[#ff0513]" />
          </div>
          {title && <h1 className="font-manrope text-2xl font-bold">{title}</h1>}
          <p className="mt-2 text-sm text-zinc-500">Sign in and continue your challenge</p>
        </div>
        {error && (
          <p className="mb-4 rounded-xl border border-red-400/15 bg-red-500/[0.08] px-4 py-3 text-center text-sm text-red-300">
            {error}
          </p>
        )}
        {children}
      </div>
    </main>
  );
}
