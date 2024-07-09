import type { Meta, StoryObj } from '@storybook/react';
import { DateInput } from './DateInput';

const meta = {
  title: 'Components/DateInput',
  component: DateInput
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'LABEL',
  },
};

