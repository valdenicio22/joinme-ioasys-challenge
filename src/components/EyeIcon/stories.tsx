import { Story, Meta } from '@storybook/react'
import EyeIcon from '.'

export default {
  title: 'EyeIcon',
  component: EyeIcon
} as Meta

export const Default: Story = (args) => <EyeIcon {...args} />
