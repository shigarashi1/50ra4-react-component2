import { createStoryMeta, createStoryTemplate } from '../../../storybookUtils';

import { Button } from './Button';

export default createStoryMeta(Button, {
  title: 'inputs/Button',
});

const Template = createStoryTemplate(Button);

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Secondary',
};

export const Large = Template.bind({});
Large.args = {
  color: 'info',
  size: 'large',
  children: 'Large',
};

export const Outlined = Template.bind({});
Outlined.args = {
  color: 'error',
  variant: 'outlined',
  children: 'Outline',
};

export const Text = Template.bind({});
Text.args = {
  color: 'purple',
  variant: 'text',
  children: 'Text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: 'warning',
  disabled: true,
  children: 'Text',
};
