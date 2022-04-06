import { screen } from '@testing-library/react'
import { renderWithThemeProvider } from 'utils/tests/renderWithThemeProvider'

import Arrow from '.'

describe('<Arrow />', () => {
  it('should render the purple arrow', () => {
    renderWithThemeProvider(<Arrow />)

    expect(screen.getByLabelText(/Seta voltar tela/i)).toBeInTheDocument()
  })
})
