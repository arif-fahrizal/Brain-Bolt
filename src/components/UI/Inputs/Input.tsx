interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, type, ...InputOptions }: InputProps) {
  return (
    <div className="text-sm text-zinc-300">
      <label htmlFor={label} className="mb-2 block">
        {label}
      </label>
      <input
        id={label}
        type={type}
        className="w-full rounded-xl border border-white/[0.09] bg-white/[0.035] px-4 py-3 text-white outline-none transition-all focus:border-[#ff0513]/60 focus:bg-[#ff0513]/[0.03]"
        autoComplete="off"
        {...InputOptions}
      />
    </div>
  );
}
