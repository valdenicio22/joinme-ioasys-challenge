import { screen } from '@testing-library/react'
import { renderWithThemeProvider } from 'utils/tests/renderWithThemeProvider'

import Button from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    renderWithThemeProvider(<Button>Entrar</Button>)
    expect(screen.getByRole('button', { name: /Entrar/i })).toBeInTheDocument()
  })

  it('should render the button with style proprieties', () => {
    renderWithThemeProvider(<Button>Entrar</Button>)
    expect(screen.getByRole('button', { name: /Entrar/i })).toHaveStyle({
      padding: '0.65rem 3rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithThemeProvider(<Button fullWidth>Entrar</Button>)

    expect(screen.getByRole('button', { name: /Entrar/i })).toHaveStyle({
      width: '100%'
    })
  })
})
