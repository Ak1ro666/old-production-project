import { Option } from '../domain/types';
import { useSelect } from '../view-model/use-select';
import { Root } from '../ui/root';
import { SelectList } from '../ui/select-list';
import { memo } from 'react';

interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'label' | 'onChange'> {
  label?: string;
  className?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  disabled?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const { label, className, options, value, onChange, readOnly, disabled, ...otherProps } = props;
  const isReadOnly = readOnly || disabled;
  const select = useSelect({ options, onChange, disabled: isReadOnly });

  return (
    <Root
      disabled={isReadOnly}
      label={label}
      className={className}
      select={
        <SelectList
          options={select.optionsList}
          value={value}
          onChange={select.onChangeHandler}
          props={otherProps}
        />
      }
    />
  );
});
