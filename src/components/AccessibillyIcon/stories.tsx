import { Story, Meta } from '@storybook/react'
import AccessibillyIcon from '.'

export default {
  title: 'AccessibillyIcon',
  component: AccessibillyIcon
} as Meta

export const Default: Story = (args) => <AccessibillyIcon {...args} />
