import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-dvh pb-5 text-white bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 bg-opacity-30 filter backdrop-blur md:h-full">
      <img
        src="./icons/citylife.svg"
        alt="auth-background"
        className="fixed w-full h-full mix-blend-multiply object-cover -z-10"
      />
      <div className="w-120 h-3/4 px-10 py-20 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
