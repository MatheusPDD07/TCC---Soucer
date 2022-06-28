import { render, screen } from 'utils/test-utils'

import DocumentCardPagination from '.'

describe('<DocumentCardPagination />', () => {
  it('should render the heading', () => {
    render(<DocumentCardPagination items={[]} />)

    expect(
      screen.getByRole('heading', { name: /DocumentCardPagination/i })
    ).toBeInTheDocument()
  })
})
