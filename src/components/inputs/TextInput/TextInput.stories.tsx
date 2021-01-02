import { createStoryMeta, createStoryTemplate } from '../../../storybookUtils';

import { TextInput } from './TextInput';

export default createStoryMeta(TextInput, {
  title: 'inputs/TextInput',
});

const Template = createStoryTemplate(TextInput);

export const Docs = Template.bind({});
Docs.args = {
  value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
};
