import React from 'react';

import { HighLightOffIcon } from '../../display';
import { IconButtonProps, IconButton } from '../IconButton/IconButton';

type Props = IconButtonProps;

export const ClearIconButton: React.FC<Props> = (props) => {
  return (
    <IconButton {...props}>
      <HighLightOffIcon color="default" size="small" />
    </IconButton>
  );
};
