import { render, screen } from '@testing-library/react'

import Arrow from '.'

describe('<Arrow />', () => {
  it('should render the heading', () => {
    const { container } = render(<Arrow />)

    expect(screen.getByRole('heading', { name: /Arrow/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
