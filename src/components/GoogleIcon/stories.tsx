import { Story, Meta } from '@storybook/react'
import GoogleIcon from '.'

export default {
  title: 'GoogleIcon',
  component: GoogleIcon
} as Meta

export const Default: Story = (args) => <GoogleIcon {...args} />
