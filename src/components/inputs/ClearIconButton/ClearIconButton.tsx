import React from 'react';
import styled from 'styled-components';

import { HighLightOffIcon } from '../../display';
import { IconButtonProps, IconButton } from '../IconButton/IconButton';

type Props = IconButtonProps;

const ClearIconButtonBase: React.FC<Props> = (props) => {
  return (
    <IconButton {...props}>
      <HighLightOffIcon color="default" size="small" />
    </IconButton>
  );
};

export const ClearIconButton = styled(ClearIconButtonBase)`
  border: none;
  outline: none;
`;
