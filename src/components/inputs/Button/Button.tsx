import React from 'react';
import styled from 'styled-components';
export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ primary = false, size = 'medium', label, onClick }) => {
  return (
    <StyledButton type="button" primary={primary} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ primary: boolean }>`
  font-weight: 700;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  font-size: 14px;
  padding: 11px 20px;
  background-color: ${({ primary, theme }) => (primary ? theme.color.button.primary : theme.color.button.secondary)};
  color: ${({ primary, theme }) => (primary ? theme.font.color.primary : theme.font.color.secondary)};
`;
