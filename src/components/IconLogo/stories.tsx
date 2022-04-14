import { Story, Meta } from '@storybook/react'
import IconLogo from '.'

export default {
  title: 'IconLogo',
  component: IconLogo
} as Meta

export const Default: Story = (args) => <IconLogo {...args} />
