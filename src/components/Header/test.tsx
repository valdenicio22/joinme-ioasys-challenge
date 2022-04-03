import { screen } from '@testing-library/react'
import { renderWithThemeProvider } from 'utils/renderWithThemeProvider'

import Header from '.'

describe('<Header />', () => {
  it('should render the heading', () => {
    renderWithThemeProvider(<Header />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should render navigation options correctly', () => {
    renderWithThemeProvider(<Header />)

    const homeOption = screen.getByRole('link', { name: 'Home' })
    const postsOption = screen.getByRole('link', { name: 'Posts' })

    expect(homeOption).toBeVisible()
    expect(postsOption).toBeVisible()

    expect(homeOption).toHaveAttribute('href', '')
    expect(postsOption).toHaveAttribute('href', '')
  })
})
