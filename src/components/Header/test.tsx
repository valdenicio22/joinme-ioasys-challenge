import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithThemeProvider } from 'utils/renderWithThemeProvider'

import Header from '.'

describe('<Header />', () => {
  it('should render the heading', () => {
    renderWithThemeProvider(<Header />, { providerProps: { theme } })

    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should render navigation options correctly', () => {
    renderWithThemeProvider(<Header />, { providerProps: { theme } })

    const homeOption = screen.getByRole('link', { name: 'Home' })
    const postsOption = screen.getByRole('link', { name: 'Posts' })

    expect(homeOption).toBeVisible()
    expect(postsOption).toBeVisible()

    expect(homeOption).toHaveAttribute('href', '')
    expect(postsOption).toHaveAttribute('href', '')
  })
})
