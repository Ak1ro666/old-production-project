import { memo } from 'react';

import styles from './Input.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { InputProps, InputTheme } from './Input.types';
import { useInputHandlers } from '../../view-modal/use-input-handlers';
import { Root } from '../../ui/root';

export const Input = memo((props: InputProps) => {
  const {
    value,
    onChange,
    type = 'text',
    theme = InputTheme.PRIMARY,
    placeholder,
    className,
    autoFocus,
    disabled,
    readOnly,
    ...otherProps
  } = props;

  const inputHandlers = useInputHandlers({ onChange, autoFocus, readOnly });

  return (
    <Root
      input={
        <input
          ref={inputHandlers.inputRef}
          className={classNames(styles.input, {}, [styles[theme]])}
          value={value}
          onChange={inputHandlers.onChangeHandler}
          type={type}
          onBlur={inputHandlers.onBlur}
          onFocus={inputHandlers.onFocus}
          readOnly={readOnly}
          onSelect={inputHandlers.onSelect}
          disabled={disabled}
          {...otherProps}
        />
      }
      placeholder={placeholder}
      caretPosition={inputHandlers.caretPosition}
      isCaretVisible={inputHandlers.isCaretVisible}
      className={className}
      disabled={disabled}
    />
  );
});
