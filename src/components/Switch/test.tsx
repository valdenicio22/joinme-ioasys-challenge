import { screen } from '@testing-library/react'
import { renderWithThemeProvider } from 'utils/tests/renderWithThemeProvider'

import Switch from '.'

describe('<Switch />', () => {
  it('should render the primary background when it is checked', () => {
    renderWithThemeProvider(
      <Switch
        checked={true}
        onCheckedChange={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    )

    expect(screen.getByRole('switch')).toHaveStyle({
      'background-color': '#493A92'
    })
  })
})
