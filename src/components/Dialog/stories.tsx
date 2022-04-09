import { Story, Meta } from '@storybook/react'
import { Dialog } from '.'

export default {
  title: 'Dialog',
  component: Dialog
} as Meta

export const Default: Story = () => (
  <Dialog
    isModalOpen={false}
    onCloseModal={function (): void {
      throw new Error('Function not implemented.')
    }}
  />
)
