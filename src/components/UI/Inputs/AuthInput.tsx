import { Eye, EyeOff } from 'lucide-react';
import useBoolean from '../../../hooks/useBoolean';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function AuthInput({ label, type, error, ...InputOptions }: InputProps) {
  const showPassword = useBoolean();
  return (
    <div className="w-full">
      <label htmlFor={label} className={`mb-2 block text-sm ${error ? 'text-red-400' : 'text-zinc-400'}`}>
        {label}
      </label>
      <div className="relative">
        <input
          id={label}
          type={type === 'password' && showPassword.value ? 'text' : type}
          className={`w-full rounded-xl border bg-white/[0.035] px-4 py-3.5 text-white outline-none transition-all placeholder:text-zinc-600 ${error ? 'border-red-400/40 focus:border-red-400' : 'border-white/[0.09] focus:border-[#ff0513]/60 focus:bg-[#ff0513]/[0.03]'} ${type === 'password' ? 'pr-12' : ''}`}
          autoComplete="off"
          {...InputOptions}
        />
        {type === 'password' && (
          <button
            type="button"
            className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg text-zinc-500 transition-colors hover:text-zinc-200"
            onClick={showPassword.toggle}
            aria-label={showPassword.value ? 'Hide password' : 'Show password'}
            tabIndex={-1}
          >
            {showPassword.value ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        )}
      </div>
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
