import { createStoryMeta, createStoryTemplate } from '../../../storybookUtils';
import { InfoIcon } from './InfoIcon';

export default createStoryMeta(InfoIcon, {
  title: 'display/Icons',
});

const template = createStoryTemplate(InfoIcon);
export const Docs = template.bind({});
Docs.args = {
  color: 'primary',
  size: 'large',
};
