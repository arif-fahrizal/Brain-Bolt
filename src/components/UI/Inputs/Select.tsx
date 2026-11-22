import { ChevronDown } from 'lucide-react';
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
    <div className="relative text-sm text-zinc-300">
      <label htmlFor={`button-${label}`} className="mb-2 block">
        {label}
      </label>
      <button
        id={`button-${label}`}
        type="button"
        onClick={isOpen.toggle}
        className="flex w-full items-center justify-between rounded-xl border border-white/[0.09] bg-white/[0.035] px-4 py-3 text-left outline-none transition-all hover:border-white/[0.15]"
      >
        <span className={selected ? 'text-white' : 'text-zinc-600'}>{selected || `Select ${label.toLowerCase()}`}</span>
        <ChevronDown className={`h-4 w-4 text-zinc-500 transition-transform ${isOpen.value ? 'rotate-180' : ''}`} />
      </button>
      <Activity mode={isOpen.value ? 'visible' : 'hidden'}>
        <ul className="absolute left-0 top-[calc(100%-1px)] z-20 mt-2 max-h-52 w-full overflow-y-auto rounded-xl border border-white/[0.09] bg-[#17174a] p-1.5 shadow-2xl scrollbar-select">
          {options.map(option => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="cursor-pointer rounded-lg px-3 py-2.5 text-zinc-300 transition-colors hover:bg-[#ff0513]/15 hover:text-white"
            >
              {option.label}
            </li>
          ))}
        </ul>
      </Activity>
    </div>
  );
}
