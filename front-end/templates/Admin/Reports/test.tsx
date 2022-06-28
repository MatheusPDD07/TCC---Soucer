import { render, screen } from 'utils/test-utils'

import Reports from '.'

describe('<Reports />', () => {
  it('should render the heading', () => {
    const { container } = render(<Reports />)

    expect(screen.getByRole('heading', { name: /Reports/i })).toBeInTheDocument()
  })
})
