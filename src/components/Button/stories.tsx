import { Story, Meta } from '@storybook/react/types-6-0'
import EyeIcon from 'components/EyeIcon'
import Button, { ButtonProps } from '.'

export default {
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as unknown as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Test'
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  children: 'Test',
  icon: <EyeIcon />
}
