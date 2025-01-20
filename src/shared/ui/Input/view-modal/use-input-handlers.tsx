import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';

export function useInputHandlers({
  onChange,
  autoFocus,
  readOnly,
}: {
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  readOnly?: boolean;
}) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [caretPosition, setCaretPosition] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
      setCaretPosition(event.target.value.length);
    },
    [onChange],
  );

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onSelect = useCallback((e: any) => {
    setCaretPosition(e.currentTarget.selectionStart || 0);
  }, []);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  const isCaretVisible = isFocused && !readOnly;

  return {
    onChangeHandler,
    onBlur,
    onFocus,
    onSelect,
    caretPosition,
    inputRef,
    isCaretVisible,
  } as const;
}
