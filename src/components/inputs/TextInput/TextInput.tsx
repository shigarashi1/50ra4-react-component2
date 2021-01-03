import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { InputWrapper } from '../InputWrapper/InputWrapper';
import { ClearIconButton } from '../ClearIconButton/ClearIconButton';

type InputType = 'text' | 'search' | 'tel' | 'url' | 'email' | 'password' | 'date' | 'time' | 'number';
type Props = {
  className?: string;
  id: string;
  name: string;
  value?: string;
  type?: InputType;
  placeHolder?: string;
  disabled?: boolean;
  hasError?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onClear?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const TextInput: React.FC<Props> = ({
  className,
  id,
  name,
  type = 'text',
  value = '',
  disabled = false,
  hasError = false,
  onChange,
  onBlur,
  onFocus,
  onClear,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [stack, setStack] = useState<React.ChangeEvent<HTMLInputElement> | undefined>(undefined);
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

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setStack(event);
    }
  };

  const onFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus && !disabled) {
      setIsFocused(true);
      onFocus(event);
    }
  };

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur && !disabled) {
      setIsFocused(false);
      onBlur(event);
    }
  };

  const onCompositionStart = (event: React.CompositionEvent<HTMLInputElement>) => {
    setIsComposition(true);
  };

  const onCompositionEnd = (event: React.CompositionEvent<HTMLInputElement>) => {
    setIsComposition(false);
  };

  return (
    <InputWrapper className={className} isFocused={isFocused} hasError={hasError} disabled={disabled}>
      <StyledInput
        type={type}
        ref={inputRef}
        id={id}
        name={name}
        disabled={disabled}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        onCompositionStart={onCompositionStart}
        onCompositionEnd={onCompositionEnd}
      />
      {!!value && <StyledClearIconButton disabled={disabled} onClick={onClear} />}
    </InputWrapper>
  );
};

const StyledInput = styled.input`
  border: none;
  outline: none;
  padding: 4px;
  width: 100%;
  ${({ theme }) => theme.font.ellipsis()}
`;

const StyledClearIconButton = styled(ClearIconButton)`
  border: none;
  outline: none;
`;
