import { Button } from "../../Button/Button"
import { type Meta, type StoryObj } from "@storybook/react"
import { Modal } from "./Modal"

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs']
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: "_____________________Form_____________________",
        isOpen: true
    }
}
