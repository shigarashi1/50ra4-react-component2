import React from 'react';
import styled from 'styled-components';
import { CheckboxColor, CheckboxSize } from '../../../styles';
import { CheckboxIcon } from '../../display';

type Props = {
  className?: string;
  label: string;
  id: string;
  value?: string;
  name?: string;
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
  size?: CheckboxSize;
  color?: CheckboxColor;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox: React.FC<Props> = ({
  className,
  label,
  id,
  value,
  name = label,
  checked = false,
  required = false,
  disabled = false,
  size = 'medium',
  color = 'default',
  onChange,
}) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disabled) {
      onChange(event);
    }
  };

  return (
    <StyledRoot className={className} disabled={disabled}>
      <HiddenCheckbox id={id} value={value} name={name} onChange={onChangeHandler} />
      <StyledCheckbox>
        <CheckboxIcon size={size} color={color} on={checked} />
      </StyledCheckbox>
      {!!label && (
        <StyledLabel htmlFor={id} size={size} color={color} disabled={disabled} required={required}>
          {label}
        </StyledLabel>
      )}
    </StyledRoot>
  );
};

type RequiredProps = Required<Props>;
const StyledRoot = styled.div<Pick<RequiredProps, 'disabled'>>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => disabled && 0.5};
  &:hover {
    opacity: 0.5;
  }
`;

const StyledCheckbox = styled.div`
  display: inline-flex;
  align-items: center;
  transition: all 150ms;
  margin-right: 5px;
`;

const StyledLabel = styled.label<Pick<RequiredProps, 'disabled' | 'required' | 'size' | 'color'>>`
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => disabled && 0.5};
  font-size: ${({ theme, size }) => `${theme.font.size[size]}px`};
  font-weight: ${({ theme, size }) => size === 'large' && theme.font.weight.bold};
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;
