import React from 'react';
import styled from 'styled-components';
import { ButtonColor, ButtonSize, ButtonVariant } from '../../../styles';

type Props = {
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button: React.FC<Props> = ({
  color = 'default',
  size = 'medium',
  variant = 'contained',
  disabled = false,
  fullWidth = false,
  onClick,
  children = null,
}) => {
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick && !disabled) {
      onClick(event);
    }
  };

  return (
    <StyledButton
      type="button"
      color={color}
      size={size}
      variant={variant}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClickHandler}
    >
      {children}
    </StyledButton>
  );
};

type StyledProps = Omit<Required<Props>, 'onClick'>;
const StyledButton = styled.button<StyledProps>`
  font-weight: 700;
  border: ${({ variant }) => (variant === 'outlined' ? '1px' : 0)};
  border-color: ${({ theme, variant, color }) => variant === 'outlined' && theme.color.button[color]};
  border-style: ${({ variant }) => variant === 'outlined' && 'solid'};
  border-radius: 3px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => disabled && 0.5};
  display: inline-block;
  line-height: 1;
  font-size: ${({ theme, size }) => `${theme.font.size[size]}px`};
  padding: ${({ theme, size }) => theme.padding[size]};
  background-color: ${({ theme, variant, color }) => (variant !== 'contained' ? 'inherit' : theme.color.button[color])};
  color: ${({ theme, variant, color }) =>
    variant !== 'contained' ? theme.color.button[color] : theme.font.color.white};
  width: ${({ fullWidth }) => fullWidth && '100%'};
  &:hover {
    opacity: 0.5;
  }
`;
