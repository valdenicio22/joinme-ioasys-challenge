import { Story, Meta } from '@storybook/react'
import FlutterIcon from '.'

export default {
  title: 'FlutterIcon',
  component: FlutterIcon
} as Meta

export const Default: Story = (args) => <FlutterIcon {...args} />
