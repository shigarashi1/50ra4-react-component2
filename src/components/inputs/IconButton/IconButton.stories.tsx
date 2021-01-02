import React from 'react';
import { createStoryMeta, createStoryTemplate } from '../../../storybookUtils';
import { SaveIcon } from '../../display/Icons';

import { IconButton } from './IconButton';

export default createStoryMeta(IconButton, {
  title: 'inputs/IconButton',
});

const Template = createStoryTemplate(IconButton);

export const Docs = Template.bind({});
Docs.args = {
  children: <SaveIcon color="primary" />,
};
