import React from 'react';
import styled from 'styled-components';
import { IconColor, IconSize } from '../../../types';

export type IconProps = {
  className?: string;
  titleAccess?: string;
  color?: IconColor;
  size?: IconSize;
};

type Props = IconProps & {
  viewBox?: string;
};

/**
 * @see https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/SvgIcon/SvgIcon.js
 */
export const SvgIcon: React.FC<Props> = ({
  className,
  titleAccess,
  viewBox = '0 0 24 24',
  color = 'default',
  size = 'medium',
  children = null,
}) => {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      color={color}
      size={size}
      aria-hidden={titleAccess ? undefined : true}
      role={titleAccess ? 'img' : undefined}
      viewBox={viewBox}
    >
      {children}
    </StyledSvg>
  );
};

type StyledProps = Pick<Required<Props>, 'color' | 'size'>;
const StyledSvg = styled.svg<StyledProps>`
  fill: ${({ color, theme }) => theme.palette[color].main};
  width: ${({ size, theme }) => `${theme.iconSize[size]}px`};
  height: ${({ size, theme }) => `${theme.iconSize[size]}px`};
`;
