import { createStoryMeta, createStoryTemplate } from '../../../storybookUtils';

import { Checkbox } from './Checkbox';

export default createStoryMeta(Checkbox, {
  title: 'inputs/Checkbox',
});

const Template = createStoryTemplate(Checkbox);

export const Docs = Template.bind({});
Docs.args = {
  checked: true,
  color: 'primary',
  id: 'checkbox',
  label: 'Checkbox',
};
