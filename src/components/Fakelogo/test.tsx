import { render, screen } from '@testing-library/react'

import Fakelogo from '.'

describe('<Fakelogo />', () => {
  it('should render the heading', () => {
    render(<Fakelogo />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
