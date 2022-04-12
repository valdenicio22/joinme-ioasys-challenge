import { Story, Meta } from '@storybook/react'
import BookMark from '.'

export default {
  title: 'BookMark',
  component: BookMark
} as Meta

export const Default: Story = (args) => <BookMark isBooked={false} {...args} />
