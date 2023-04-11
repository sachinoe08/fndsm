import { Meta, Story } from '@storybook/react/types-6-0';
import { IStarProps, Star } from './Star';

export default {
  title: 'Components/Star',
  component: Star,
} as Meta;

export const Default: Story<IStarProps> = (args) => <Star {...args} />;
Default.args = {
  value: 4.7,
};
