import { createStoryMeta, createStoryTemplate } from '../storybookUtils';

import { Button } from './Button';

export default createStoryMeta(Button, {
  title: 'Example/Button',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
});

const Template = createStoryTemplate(Button);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
