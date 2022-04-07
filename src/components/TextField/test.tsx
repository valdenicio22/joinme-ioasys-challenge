import { screen } from '@testing-library/react'
import { renderWithThemeProvider } from 'utils/tests/renderWithThemeProvider'

import { TextField } from '.'

describe('<TextField />', () => {
  it('should render the heading', () => {
    renderWithThemeProvider(<TextField />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render without Label', () => {
    renderWithThemeProvider(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })
})
