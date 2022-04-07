import { screen } from '@testing-library/react'
import { renderWithThemeProvider } from 'utils/tests/renderWithThemeProvider'

import Logo from '.'

//Render the component
//select the component that will be tested `screen` (queries) - getByLabel...
//expect - expect result after render

describe('<Logo />', () => {
  it('should render the white logo by default', () => {
    renderWithThemeProvider(<Logo />)

    expect(screen.getByLabelText(/Logo JoinMe/i).parentElement).toHaveStyle({
      color: '#FFFFFF'
    })
  })

  it('should render black logo when the color is passed', () => {
    renderWithThemeProvider(<Logo color="black" />)

    expect(screen.getByLabelText(/Logo JoinMe/i).parentElement).toHaveStyle({
      color: '#2C3131'
    })
  })
})
