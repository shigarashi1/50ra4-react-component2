import React from 'react';
import styled from 'styled-components';

import { useTextInputHelper } from '../../../hooks';

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
  const {
    inputRef,
    isFocused,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
    onCompositionStart,
    onCompositionEnd,
  } = useTextInputHelper({
    value,
    disabled,
    onChange,
    onBlur,
    onFocus,
  });

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
  line-height: 20px;
  padding: 4px;
  width: 100%;
  ${({ theme }) => theme.font.ellipsis()}
`;

const StyledClearIconButton = styled(ClearIconButton)`
  border: none;
  outline: none;
`;
