import { screen } from '@testing-library/react'
import { renderWithThemeProvider } from 'utils/renderWithThemeProvider'

import SignUpButton from '.'

describe('<SignUpButton />', () => {
  it('should render the heading', () => {
    renderWithThemeProvider(<SignUpButton />)

    expect(
      screen.getByRole('button', { name: /Increva-se Aqui/i })
    ).toBeVisible()
  })
})
