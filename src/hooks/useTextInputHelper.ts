import { useEffect, useRef, useState } from 'react';

type TextInputElement = HTMLInputElement | HTMLTextAreaElement;
type Props<Element extends TextInputElement> = {
  value: string;
  disabled: boolean;
  onChange?: (event: React.ChangeEvent<Element>) => void;
  onFocus?: (event: React.FocusEvent<Element>) => void;
  onBlur?: (event: React.FocusEvent<Element>) => void;
};
export const useTextInputHelper = <InputElement extends TextInputElement>({
  value,
  disabled,
  onChange,
  onFocus,
  onBlur,
}: Props<InputElement>) => {
  const inputRef = useRef<InputElement | null>(null);
  const [stack, setStack] = useState<React.ChangeEvent<InputElement> | undefined>(undefined);
  const [isComposition, setIsComposition] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = value;
    }
  }, [value]);

  useEffect(() => {
    if (!isComposition && onChange && stack) {
      onChange(stack);
      setStack(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComposition]);

  const onChangeHandler = (event: React.ChangeEvent<InputElement>) => {
    if (disabled) {
      return;
    }
    if (isComposition) {
      setStack(event);
      return;
    }
    if (onChange) {
      onChange(event);
    }
  };

  const onFocusHandler = (event: React.FocusEvent<InputElement>) => {
    if (onFocus && !disabled) {
      setIsFocused(true);
      onFocus(event);
    }
  };

  const onBlurHandler = (event: React.FocusEvent<InputElement>) => {
    if (onBlur && !disabled) {
      setIsFocused(false);
      onBlur(event);
    }
  };

  const onCompositionStart = (event: React.CompositionEvent<InputElement>) => {
    setIsComposition(true);
  };

  const onCompositionEnd = (event: React.CompositionEvent<InputElement>) => {
    setIsComposition(false);
  };

  return { inputRef, isFocused, onChangeHandler, onFocusHandler, onBlurHandler, onCompositionStart, onCompositionEnd };
};
