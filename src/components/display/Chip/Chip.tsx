import React from 'react';
import styled from 'styled-components';
import { ChipSize, ChipColor, ChipVariant } from '../../../styles';

type Props = {
  className?: string;
  color?: ChipColor;
  size?: ChipSize;
  variant?: ChipVariant;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onDelete?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

export const Chip: React.FC<Props> = ({
  className,
  color = 'default',
  size = 'small',
  variant = 'default',
  disabled = false,
  children = null,
  onClick,
  onDelete,
}) => {
  const isClickable = !!onClick && !disabled;
  const onClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    if (onClick && !disabled) {
      onClick(event);
    }
  };

  const onDeleteHandler = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    if (onDelete && !disabled) {
      onDelete(event);
    }
  };

  return (
    <StyledRoot
      className={className}
      color={color}
      size={size}
      variant={variant}
      disabled={disabled}
      isClickable={isClickable}
      onClick={onClickHandler}
    >
      <StyledContentWrapper>
        <StyledContent>{children}</StyledContent>
        {onDelete && <StyledDeleteIcon onClick={onDeleteHandler}>X</StyledDeleteIcon>}
      </StyledContentWrapper>
    </StyledRoot>
  );
};

type StyledRootProps = Omit<Required<Props>, 'className' | 'onClick' | 'onDelete'> & { isClickable: boolean };
const StyledRoot = styled.div<StyledRootProps>`
  display: inline-block;
  border: ${({ variant }) => variant === 'outlined' && '1px'};
  border-color: ${({ theme, variant, color }) => variant === 'outlined' && theme.color.palette[color].main};
  border-style: ${({ variant }) => variant === 'outlined' && 'solid'};
  border-radius: 100px;
  cursor: ${({ isClickable }) => (!isClickable ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => disabled && 0.5};
  background-color: ${({ theme, variant, color }) =>
    variant === 'outlined' ? 'inherit' : theme.color.palette[color].main};
  padding: ${({ theme, size }) => theme.padding[size]};
  /** default font */
  color: ${({ theme, variant, color }) =>
    variant === 'outlined' ? theme.color.palette[color].main : theme.font.color.white};
  font-size: ${({ theme, size }) => `${theme.font.size[size]}px`};
  font-weight: ${({ theme, size }) => size === 'large' && theme.font.weight.bold};
  letter-spacing: ${({ theme, size }) => size === 'large' && theme.font.letterSpacing.wider};
  &:hover {
    opacity: ${({ isClickable }) => isClickable && 0.5};
  }
`;
const StyledContentWrapper = styled.div`
  display: inline-block;
`;
const StyledContent = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
// TODO: replace Icons
const StyledDeleteIcon = styled.span`
  color: ${({ theme }) => theme.font.color.lightGray};
  font-size: ${({ theme }) => theme.font.size.medium};
  padding-left: 10px;
`;
