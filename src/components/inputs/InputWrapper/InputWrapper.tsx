import styled from 'styled-components';

type Props = {
  isFocused: boolean;
  hasError: boolean;
  disabled: boolean;
};

export const InputWrapper = styled.div<Props>`
  display: inline-flex;
  align-self: center;
  width: 100%;
  background-color: ${({ theme }) => theme.input.backGroundColor};
  opacity: ${({ disabled }) => disabled && 0.5};
  border-width: 1px;
  border-color: ${({ theme }) => theme.input.borderColor};
  border-style: solid;
  border-radius: 3px;
  ${({ theme, isFocused, hasError }) => theme.input.focusBoxShadow(isFocused, hasError)};
  padding: 4px;
`;
