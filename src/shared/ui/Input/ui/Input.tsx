import { memo } from 'react';

import styles from './Input.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { InputProps, InputTheme } from './Input.types';
import { useInputHandlers } from '../view-modal/use-input-handlers';

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
    <div
      className={classNames(
        styles.inputWrapper,
        {
          [styles.disabled]: disabled,
        },
        [className],
      )}
    >
      {placeholder && <div className={styles.placeholder}>{`${placeholder}>`}</div>}
      <div className={styles.caretWrapper}>
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
        {inputHandlers.isCaretVisible && (
          <span
            className={styles.caret}
            style={{
              left: inputHandlers.caretPosition * 8.8,
            }}
          />
        )}
      </div>
    </div>
  );
});
