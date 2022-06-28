import { render, screen } from 'utils/test-utils'

import DocumentsTable from '.'

describe('<DocumentsTable />', () => {
  it('should render the heading', () => {
    const { container } = render(<DocumentsTable />)

    expect(screen.getByRole('heading', { name: /DocumentsTable/i })).toBeInTheDocument()
  })
})
