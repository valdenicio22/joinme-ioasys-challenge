import { Story, Meta } from '@storybook/react'
import MeditationIcon from '.'

export default {
  title: 'MeditationIcon',
  component: MeditationIcon
} as Meta

export const Default: Story = (args) => <MeditationIcon {...args} />
