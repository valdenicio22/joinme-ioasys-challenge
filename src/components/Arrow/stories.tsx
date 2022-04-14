import { Story, Meta } from '@storybook/react'
import Arrow from '.'

export default {
  title: 'Arrow',
  component: Arrow
} as Meta

export const Default: Story = (args) => <Arrow {...args} />
