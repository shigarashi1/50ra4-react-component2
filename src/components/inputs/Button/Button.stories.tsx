import { createStoryMeta, createStoryTemplate } from '../../../storybookUtils';

import { Button } from './Button';

export default createStoryMeta(Button, {
  title: 'inputs/Button',
});

const Template = createStoryTemplate(Button);

export const Docs = Template.bind({});
Docs.args = {
  color: 'primary',
  children: 'Primary',
};
