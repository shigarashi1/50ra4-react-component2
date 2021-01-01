import { createStoryMeta, createStoryTemplate } from '../../../storybookUtils';

import { Chip } from './Chip';

export default createStoryMeta(Chip, {
  title: 'display/Chip',
});

const Template = createStoryTemplate(Chip);

export const Docs = Template.bind({});
Docs.args = {
  color: 'primary',
  onClick: undefined,
  onDelete: undefined,
  children: 'Sample',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  onDelete: undefined,
  children: 'Secondary',
};

export const WithDeleteIcon = Template.bind({});
WithDeleteIcon.args = {
  color: 'info',
  children: 'With Delete Icon',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  onDelete: undefined,
  children: 'Medium',
};

export const Large = Template.bind({});
Large.args = {
  color: 'error',
  size: 'large',
  onDelete: undefined,
  children: 'Large',
};

export const Outlined = Template.bind({});
Outlined.args = {
  color: 'purple',
  variant: 'outlined',
  onDelete: undefined,
  children: 'Large',
};
