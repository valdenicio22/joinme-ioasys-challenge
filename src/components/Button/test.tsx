import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    render(<Button>Entrar</Button>)
    expect(screen.getByRole('button', { name: /Entrar/i })).toBeInTheDocument()
  })
})
