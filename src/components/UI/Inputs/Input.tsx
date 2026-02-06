interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, type, ...InputOptions }: InputProps) {
  return (
    <div className="text-sm text-left text-white">
      <label htmlFor={label} className="pl-2.5">
        {label}
      </label>
      <input
        id={label}
        type={type}
        className="w-full mt-1 px-5 py-2.5 rounded-2xl border border-white/20 outline-none transition-all bg-white/10 backdrop-blur-md hover:bg-white/15"
        autoComplete="off"
        {...InputOptions}
      />
    </div>
  );
}
