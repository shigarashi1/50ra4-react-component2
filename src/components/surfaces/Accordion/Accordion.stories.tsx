import { createStoryMeta, createStoryTemplate } from '../../../storybookUtils';

import { Accordion } from './Accordion';

export default createStoryMeta(Accordion, {
  title: 'surfaces/Accordion',
});

const Template = createStoryTemplate(Accordion);

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const Docs = Template.bind({});
Docs.args = {
  title: 'Accordion Sample',
  children: <p>{text}</p>,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Accordion Disabled Sample',
  disabled: true,
  defaultExpanded: true,
  children: <p>{text}</p>,
};
