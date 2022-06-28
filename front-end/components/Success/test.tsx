import { render, screen } from 'utils/test-utils'

import Success from '.'

describe('<Success />', () => {
  it('should render the heading', () => {
    render(<Success />)

    expect(
      screen.getByRole('heading', { name: /E-mail confirmado/i })
    ).toBeInTheDocument()
  })
})
