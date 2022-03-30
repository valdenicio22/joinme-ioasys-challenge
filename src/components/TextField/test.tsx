import { render, screen } from '@testing-library/react'

import TextField from '.'

describe('<TextField />', () => {
  it('should render the heading', () => {
    render(<TextField />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
