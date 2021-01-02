import React, { ComponentProps, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { HighLightOffIcon } from '../../display';
import { IconButton } from '../IconButton/IconButton';

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
  const [focused, setFocused] = useState(false);

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
      setFocused(true);
      onFocus(event);
    }
  };

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur && !disabled) {
      setFocused(false);
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
    <StyledRoot className={className} focused={focused} hasError={hasError} disabled={disabled}>
      <StyledInput
        type={type}
        ref={inputRef}
        id={id}
        name={name}
        disabled={disabled}
        hasError={hasError}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        onCompositionStart={onCompositionStart}
        onCompositionEnd={onCompositionEnd}
      />
      {!!value && <StyledClearButton disabled={disabled} onClear={onClear} />}
    </StyledRoot>
  );
};

type RequiredProps = Required<Props>;
type StyledRootProps = Pick<RequiredProps, 'disabled' | 'hasError'> & {
  focused: boolean;
};
const StyledRoot = styled.div<StyledRootProps>`
  display: inline-flex;
  align-self: center;
  width: 100%;
  background-color: #ffffff;
  opacity: ${({ disabled }) => disabled && 0.5};
  border-width: 1px;
  border-color: ${({ theme }) => theme.palette.default.main};
  border-style: solid;
  border-radius: 3px;
  box-shadow: ${({ theme, focused, hasError }) =>
    (focused || hasError) && `0 0 0 2px ${focused ? theme.palette.positive.light : theme.palette.error.light}`};
  padding: 2px;
`;
type StyledInputProps = Pick<RequiredProps, 'disabled' | 'hasError'>;
const StyledInput = styled.input<StyledInputProps>`
  border: none;
  outline: none;
  padding: 4px;
  width: 100%;
  ${({ theme }) => theme.font.ellipsis()}
`;

type ClearButtonProps = ComponentProps<typeof IconButton>;
const ClearButton: React.FC<ClearButtonProps> = (props) => {
  return (
    <IconButton {...props}>
      <HighLightOffIcon color="default" size="small" />
    </IconButton>
  );
};
const StyledClearButton = styled(ClearButton)`
  border: none;
  outline: none;
`;
