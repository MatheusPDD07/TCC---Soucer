import { render, screen } from 'utils/test-utils'

import NotFound from '.'

describe('<NotFound />', () => {
  it('should render the heading', () => {
    render(
      <NotFound>
        <h1>NotFound</h1>
      </NotFound>
    )

    expect(
      screen.getByRole('heading', { name: /NotFound/i })
    ).toBeInTheDocument()
  })
})
