import type { Meta, StoryObj } from '@storybook/react';
import { FormInput } from './FormInput';

const meta = {
  title: 'Components/FormInput',
  component: FormInput,
  parameters: {
		layout: 'centered',
	},
  tags: ['autodocs'],
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Text: Story = {
  args: {
    type: 'text',
    placeholder: 'Placeholder',
    label: 'Label',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Placeholder',
    label: 'Label',
  },
};

