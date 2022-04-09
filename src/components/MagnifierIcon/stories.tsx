import { Story, Meta } from '@storybook/react'
import MagnifierIcon from '.'

export default {
  title: 'MagnifierIcon',
  component: MagnifierIcon
} as Meta

export const Default: Story = (args) => <MagnifierIcon {...args} />
