import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

type RenderWithThemeProvider = (
  ui: React.ReactElement,
  options?: RenderOptions
) => RenderResult

export const renderWithThemeProvider: RenderWithThemeProvider = (
  ui,
  renderOptions
) => {
  return render(
    <ThemeProvider theme={theme}>{ui}</ThemeProvider>,
    renderOptions
  )
}
