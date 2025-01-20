import { ChangeEvent, useMemo } from 'react';
import { Option as OptionType } from '../domain/types';

import { Option } from '../ui/option';

export function useSelect({
  options,
  onChange,
  disabled,
}: {
  options: OptionType[];
  onChange: (value: string) => void;
  disabled?: boolean;
}) {
  const optionsList = useMemo(
    () =>
      options?.map((option) => (
        <Option
          key={option.value}
          disabled={disabled}
          content={option.content}
          value={option.value}
        />
      )),
    [disabled, options],
  );

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return {
    optionsList,
    onChangeHandler,
  } as const;
}
