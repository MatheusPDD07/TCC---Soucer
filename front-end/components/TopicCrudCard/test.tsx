import { render, screen } from 'utils/test-utils'

import TopicCrudCard from '.'

const props = {
  id: 'b12863de-0b05-4be1-94a4-2d0b1a1d7ff9',
  title: 'Infraestrutura',
  fatherId: 'string',
  description: 'Estude sobre AWS, Docker, Azure, etc...',
  sons: [],
  topics: []
}

describe('<TopicCrudCard />', () => {
  it('should render the heading', () => {
    render(<TopicCrudCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /TopicCrudCard/i })
    ).toBeInTheDocument()
  })
})
