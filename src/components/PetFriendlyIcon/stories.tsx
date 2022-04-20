import { Story, Meta } from '@storybook/react'
import PetFriendlyIcon from '.'

export default {
  title: 'PetFriendlyIcon',
  component: PetFriendlyIcon
} as Meta

export const Default: Story = (args) => <PetFriendlyIcon {...args} />
