import React from 'react';

import { SvgIcon, IconProps } from './SvgIcon';

export const ExpandMoreIcon: React.FC<IconProps> = ({ className, titleAccess, color, size }) => {
  return (
    <SvgIcon className={className} titleAccess={titleAccess} color={color} size={size}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </SvgIcon>
  );
};
