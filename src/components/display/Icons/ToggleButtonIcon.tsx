import React from 'react';

import { SvgIcon, IconProps } from './SvgIcon';

type Props = IconProps & {
  on?: boolean;
};

export const ToggleButtonIcon: React.FC<Props> = ({ className, titleAccess, color, size, on = false }) => {
  return (
    <SvgIcon className={className} titleAccess={titleAccess} color={color} size={size}>
      {on ? On : Off}
    </SvgIcon>
  );
};

const Off = (
  <>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
  </>
);

const On = (
  <>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
  </>
);
