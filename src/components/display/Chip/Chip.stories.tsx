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

export const WithDeleteIcon = Template.bind({});
WithDeleteIcon.args = {
  color: 'info',
  children: 'With Delete Icon',
};
