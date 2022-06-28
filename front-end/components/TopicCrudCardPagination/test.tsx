import { render, screen } from 'utils/test-utils'

import TopicCrudCardPagination from '.'

describe('<TopicCrudCardPagination />', () => {
  it('should render the heading', () => {
    render(<TopicCrudCardPagination items={[]} topics={[]} />)

    expect(
      screen.getByRole('heading', { name: /TopicCrudCardPagination/i })
    ).toBeInTheDocument()
  })
})
