import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

type RenderWithThemeProvider = (
  ui: React.ReactElement,
  options: RenderOptions & { providerProps: { theme: DefaultTheme } }
) => RenderResult

export const renderWithThemeProvider: RenderWithThemeProvider = (
  ui,
  { providerProps, ...renderOptions }
) => {
  return render(
    <ThemeProvider {...providerProps}>{ui}</ThemeProvider>,
    renderOptions
  )
}
