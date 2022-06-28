import { render, screen } from 'utils/test-utils'

import DocumentCrudCardPagination from '.'

describe('<DocumentCrudCardPagination />', () => {
  it('should render the heading', () => {
    render(<DocumentCrudCardPagination items={[]} topics={[]} />)

    expect(
      screen.getByRole('heading', { name: /DocumentCrudCardPagination/i })
    ).toBeInTheDocument()
  })
})
