import { Story, Meta } from '@storybook/react'
import Tag, { TagProps } from '.'

export default {
  title: 'Tag',
  component: Tag
} as Meta

export const Default: Story<TagProps> = (args) => <Tag {...args} />
