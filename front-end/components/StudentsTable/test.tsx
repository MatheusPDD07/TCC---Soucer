import { render, screen } from 'utils/test-utils'

import StudantsTable from '.'

describe('<StudantsTable />', () => {
  it('should render the heading', () => {
    const { container } = render(<StudantsTable />)

    expect(screen.getByRole('heading', { name: /StudantsTable/i })).toBeInTheDocument()
  })
})
