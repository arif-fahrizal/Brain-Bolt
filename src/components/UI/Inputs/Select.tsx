interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string | number; label: string }[];
}

export default function Select({ label, options }: SelectProps) {
  return (
    <div className="text-sm text-left text-white">
      <label htmlFor={label} className="pl-2.5">
        {label}
      </label>
      <select
        id={label}
        className="w-full mt-1 px-5 py-2.5 rounded-2xl border border-white/20 outline-none transition-all bg-white/10 backdrop-blur-md hover:bg-white/15"
      >
        <option value="" className="text-gray-400" selected disabled>
          {label}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value} className="text-black">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
