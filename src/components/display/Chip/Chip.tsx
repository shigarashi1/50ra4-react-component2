import React from 'react';
import styled from 'styled-components';
import { ChipSize, ChipColor, ChipVariant } from '../../../types';
import { CancelIcon } from '../Icons';

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
      <StyledContent>
        {children}
        {onDelete && (
          <StyledCancelIconWrapper color={color} variant={variant} size={size} onClick={onDeleteHandler}>
            <StyledCancelIcon size={size} />
          </StyledCancelIconWrapper>
        )}
      </StyledContent>
    </StyledRoot>
  );
};

type StyledRootProps = Omit<Required<Props>, 'className' | 'onClick' | 'onDelete'> & { isClickable: boolean };
const StyledRoot = styled.div<StyledRootProps>`
  display: inline-block;
  border: ${({ variant }) => variant === 'outlined' && '1px'};
  border-color: ${({ theme, variant, color }) => variant === 'outlined' && theme.chip.color[color]};
  border-style: ${({ variant }) => variant === 'outlined' && 'solid'};
  border-radius: 100px;
  cursor: ${({ isClickable }) => (!isClickable ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => disabled && 0.5};
  background-color: ${({ theme, variant, color }) => (variant === 'outlined' ? 'inherit' : theme.chip.color[color])};
  padding: ${({ theme, size }) => theme.chip.padding[size]};
  /** default font */
  color: ${({ theme, variant, color }) => (variant === 'outlined' ? theme.chip.color[color] : theme.font.color.white)};
  font-size: ${({ theme, size }) => `${theme.font.size[size]}px`};
  font-weight: ${({ theme, size }) => size === 'large' && theme.font.weight.bold};
  letter-spacing: ${({ theme, size }) => size === 'large' && theme.font.letterSpacing.wider};
  &:hover {
    opacity: ${({ isClickable }) => isClickable && 0.5};
  }
`;
const StyledContent = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const StyledCancelIcon = styled(CancelIcon)``;

type StyledCancelIconWrapperProps = Pick<Required<Props>, 'variant' | 'color' | 'size'>;
const StyledCancelIconWrapper = styled.div<StyledCancelIconWrapperProps>`
  display: inline-flex;
  padding-left: 5px;
  padding-bottom: ${({ size }) => size === 'small' && '2px'};
  & > ${StyledCancelIcon} {
    fill: ${({ theme, variant, color }) => (variant === 'outlined' ? theme.chip.color[color] : theme.font.color.white)};
  }
`;
