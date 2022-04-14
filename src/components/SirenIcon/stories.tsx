import { Story, Meta } from '@storybook/react'
import SirenIcon from '.'

export default {
  title: 'SirenIcon',
  component: SirenIcon
} as Meta

export const Default: Story = (args) => <SirenIcon {...args} />
