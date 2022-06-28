import { render, screen } from 'utils/test-utils'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    render(<Heading title="Studying" color="white" />)
    expect(screen.getByRole('heading', { name: /Studying/i })).toHaveStyle({
      color: '#FFFFFF'
    })
  })

  it('should render a black heading when color is passed', () => {
    render(<Heading title="Studying" color="color" />)
    expect(screen.getByRole('heading', { name: /Studying/i })).toHaveStyle({
      color: '#383D41'
    })
  })
})
