import { ChangeEvent, memo, useEffect, useRef, useState } from 'react';

import styles from './Input.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { InputProps, InputTheme } from './Input.types';

export const Input = memo((props: InputProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const {
        value,
        onChange,
        type = 'text',
        theme = InputTheme.PRIMARY,
        placeholder,
        className,
        autoFocus,
        ...otherProps
    } = props;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
        setCaretPosition(event.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e.currentTarget.selectionStart || 0);
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(styles.inputWrapper, {}, [className])}>
            {placeholder && <div className={styles.placeholder}>{`${placeholder}>`}</div>}
            <div className={styles.caretWrapper}>
                <input
                    ref={inputRef}
                    className={classNames(styles.input, {}, [styles[theme]])}
                    value={value}
                    onChange={onChangeHandler}
                    type={type}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={styles.caret}
                        style={{
                            left: caretPosition * 8.8,
                        }}
                    />
                )}
            </div>
        </div>
    );
});
