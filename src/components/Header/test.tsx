import { renderWithThemeProvider } from 'utils/tests/renderWithThemeProvider'

import Header from '.'

describe('<Header />', () => {
  it('should render the heading', () => {
    renderWithThemeProvider(<Header />)
  })
})
