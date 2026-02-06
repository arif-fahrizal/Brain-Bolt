import { Eye, EyeOff } from 'lucide-react';
import useBoolean from '../../../hooks/useBoolean';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function AuthInput({ label, type, ...InputOptions }: InputProps) {
  const showPassword = useBoolean();
  return (
    <div className="group w-full">
      <label htmlFor={label} className="text-sm tracking-wide">
        {label}
      </label>
      <div className="relative">
        <input
          id={label}
          type={type === 'password' && showPassword.value ? 'text' : type}
          className="w-full py-3 text-white border-b-2 border-gray-300 outline-none duration-300 group-focus-within:border-violet-600"
          autoComplete="off"
          {...InputOptions}
        />

        {type === 'password' && (
          <button
            type="button"
            className="absolute top-1/2 right-0 p-1 text-gray-500 -translate-1/2 hover:text-gray-700 focus:outline-none"
            onClick={showPassword.toggle}
            aria-label={showPassword.value ? 'Hide password' : 'Show password'}
            tabIndex={-1}
          >
            {showPassword.value ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
    </div>
  );
}
