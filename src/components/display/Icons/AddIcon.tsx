import React from 'react';

import { SvgIcon, IconProps } from './SvgIcon';

export const AddIcon: React.FC<IconProps> = ({ className, titleAccess, color, size }) => {
  return (
    <SvgIcon className={className} titleAccess={titleAccess} color={color} size={size}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </SvgIcon>
  );
};
