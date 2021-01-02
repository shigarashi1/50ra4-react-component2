import React from 'react';

import { SvgIcon, IconProps } from './SvgIcon';

export const ArrowDropDownIcon: React.FC<IconProps> = ({ className, titleAccess, color, size }) => {
  return (
    <SvgIcon className={className} titleAccess={titleAccess} color={color} size={size}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M7 10l5 5 5-5z" />
    </SvgIcon>
  );
};
