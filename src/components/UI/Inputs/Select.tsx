import { Activity, useState } from 'react';
import useBoolean from '../../../hooks/useBoolean';

interface SelectProps {
  label: string;
  initialValue?: string;
  options: { value: string | number; label: string }[];
  onChange?: (value?: string | number) => void;
}

export default function Select({ label, initialValue = '', options, onChange }: SelectProps) {
  const [selected, setSelected] = useState<string>(initialValue);

  const isOpen = useBoolean();

  const handleSelect = (option: { value: string | number; label: string }) => {
    setSelected(option.label);
    onChange?.(option.value);
    isOpen.toggle();
  };

  return (
    <div className="relative text-sm text-left text-white">
      <label htmlFor={`button-${label}`} className="pl-2.5">
        {label}
      </label>
      <button
        id={`button-${label}`}
        type="button"
        value={selected}
        onClick={isOpen.toggle}
        className={`w-full mt-1 px-5 py-2.5 text-left ${selected ? 'text-white' : 'text-gray-400'} rounded-2xl border border-white/20 outline-none transition-all bg-white/10 backdrop-blur-md hover:bg-white/15`}
      >
        {selected ? selected : label}
      </button>
      <Activity mode={isOpen.value ? 'visible' : 'hidden'}>
        <ul
          id={`list-${label}`}
          className="absolute flex flex-col max-h-52 w-full h-fit top-[110%] left-0 p-2.5 text-white rounded-2xl border border-white/20 backdrop-blur-xs overflow-y-auto scrollbar-select z-10"
        >
          {options.map(option => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="px-2.5 py-1.5 rounded-full transition-all duration-100 cursor-pointer hover:scale-102 hover:bg-linear-to-r hover:from-purple-500 hover:to-pink-500"
            >
              {option.label}
            </li>
          ))}
        </ul>
      </Activity>
    </div>
  );
}
