import { Story, Meta } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta<LogoProps>

export const Default: Story<LogoProps> = (args) => <Logo {...args} />
