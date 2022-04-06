import { Story, Meta } from '@storybook/react'
import Arrow, { ArrowProps } from '.'

export default {
  title: 'Arrow',
  component: Arrow
} as Meta

export const Default: Story<ArrowProps> = (args) => <Arrow {...args} />
