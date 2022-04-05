import { Story, Meta } from '@storybook/react'
import Switch, { SwitchProps } from '.'

export default {
  title: 'Switch',
  component: Switch,
  argTypes: {
    checked: {
      type: 'boolean'
    }
  }
} as Meta

export const Default: Story<SwitchProps> = (args) => <Switch {...args} />
