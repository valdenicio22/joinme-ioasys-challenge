import { Story, Meta } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import Header from '.'

export default {
  title: 'Header',
  component: Header
} as Meta

export const Default: Story = () => (
  <ThemeProvider theme={theme}>
    <Header />
  </ThemeProvider>
)
