import { screen } from '@testing-library/react'
import { renderWithThemeProvider } from 'utils/tests/renderWithThemeProvider'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithThemeProvider(
      <Checkbox label="Checkbox label" labelFor="check" />
    )

    // screen.debug(screen.getByLabelText(/Checkbox label/i))

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/Checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/Checkbox label/i)).toHaveAttribute('for', 'check')
  })
})
