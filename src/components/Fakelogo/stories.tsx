import { Story, Meta } from '@storybook/react'
import Fakelogo from '.'

export default {
  title: 'Fakelogo',
  component: Fakelogo
} as Meta

export const Default: Story = (args) => <Fakelogo {...args} />
