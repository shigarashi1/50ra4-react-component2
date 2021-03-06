import React from 'react';
import styled from 'styled-components';

export type IconButtonProps = {
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
const IconButtonBase: React.FC<IconButtonProps> = ({ className, disabled = false, onClick, children = null }) => {
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <button className={className} onClick={onClickHandler} disabled={disabled}>
      {children}
    </button>
  );
};

export const IconButton = styled(IconButtonBase)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  padding: 4px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => disabled && 0.5};
  &:hover {
    opacity: 0.5;
  }
`;
