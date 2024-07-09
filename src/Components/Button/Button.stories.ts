import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'

const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Light: Story = {
	args: {
		label: 'Button',
		variant: 'light',
	},
}

export const Dark: Story = {
	args: {
		label: 'Button',
		variant: 'dark',
	},
}

export const Disabled: Story = {
	args: {
		label: 'Button',
		disabled: true,
	},
}
