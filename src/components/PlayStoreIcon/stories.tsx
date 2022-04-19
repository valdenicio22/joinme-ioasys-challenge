import { Story, Meta } from '@storybook/react'
import PlaystoreIcon from '.'

export default {
  title: 'PlaystoreIcon',
  component: PlaystoreIcon
} as Meta

export const Default: Story = (args) => <PlaystoreIcon {...args} />
