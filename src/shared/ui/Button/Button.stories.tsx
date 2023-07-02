import type { Meta, StoryObj } from '@storybook/react'

import { Button, ThemeButton } from './Button'

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: "Button",
        theme: null
    }
}

export const Clear: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.CLEAR
    }
}
