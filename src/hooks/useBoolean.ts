import { useMemo, useState } from 'react';

export default function useBoolean(defaultValue: boolean = false) {
  const [value, setValue] = useState<boolean>(defaultValue);

  const memoizedValue = useMemo(() => {
    const onTrue = () => setValue(true);
    const onFalse = () => setValue(false);
    const toggle = () => setValue(prev => !prev);

    return { value, onTrue, onFalse, toggle, setValue };
  }, [value, setValue]);

  return memoizedValue;
}
