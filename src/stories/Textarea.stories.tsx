import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from '../components/ui/TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    placeholder: 'Digite algo aqui...',
  },
  argTypes: {
    placeholder: { control: 'text' },
    defaultValue: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Default: Story = {}

export const WithPreFilledText: Story = {
  args: {
    defaultValue: 'Texto inicial preenchido.',
  },
}
