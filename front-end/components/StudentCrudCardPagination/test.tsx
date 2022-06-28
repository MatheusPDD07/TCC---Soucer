import { render, screen } from 'utils/test-utils'

import StudentCrudCardPagination from '.'

describe('<StudentCrudCardPagination />', () => {
  it('should render the heading', () => {
    render(<StudentCrudCardPagination items={[]} />)

    expect(
      screen.getByRole('heading', { name: /StudentCrudCardPagination/i })
    ).toBeInTheDocument()
  })
})
