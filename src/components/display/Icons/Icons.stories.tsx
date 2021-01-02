import React from 'react';
import styled from 'styled-components';
import { createStoryMeta, createStoryTemplate } from '../../../storybookUtils';

import {
  AddCircleIcon,
  AddIcon,
  ArrowDropDownIcon,
  ArrowLeftIcon,
  CancelIcon,
  ChevronLeftIcon,
  CloseIcon,
  DeleteIcon,
  InfoIcon,
  MenuIcon,
  RefreshIcon,
  SaveIcon,
  SyncIcon,
  WarningIcon,
} from '.';

export default createStoryMeta(InfoIcon, {
  title: 'display/Icons',
});

const template = createStoryTemplate(InfoIcon);
export const Docs = template.bind({});
Docs.args = {
  color: 'primary',
  size: 'large',
};

const ICON_LIST = [
  ['AddCircleIcon', AddCircleIcon],
  ['AddIcon', AddIcon],
  ['ArrowDropDownIcon', ArrowDropDownIcon],
  ['ArrowLeftIcon', ArrowLeftIcon],
  ['CancelIcon', CancelIcon],
  ['CloseIcon', CloseIcon],
  ['DeleteIcon', DeleteIcon],
  ['InfoIcon', InfoIcon],
  ['MenuIcon', MenuIcon],
  ['RefreshIcon', RefreshIcon],
  ['SaveIcon', SaveIcon],
  ['SyncIcon', SyncIcon],
  ['WarningIcon', WarningIcon],
];

export const IconList = () => {
  return (
    <StyledRoot>
      {ICON_LIST.map(([name, Icon], index) => (
        <StyledWrapper key={index}>
          <p>{name}</p>
          <StyledIconWrapper>
            <Icon size="large" color="secondary" />
          </StyledIconWrapper>
        </StyledWrapper>
      ))}
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;

const StyledWrapper = styled.div`
  display: inline-block;
  padding: 10px;
`;

const StyledIconWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
`;
