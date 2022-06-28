import { render, screen } from 'utils/test-utils'

import DocumentCard from '.'

const props = {
  id: 'string',
  title: 'string',
  stars: 10,
  keys: 'string',
  views: 5,
  topic: {
    id: 'string',
    title: 'string'
  },
  student: {
    id: 'string',
    name: 'string',
    lastName: 'string',
    imageUrl: 'string'
  }
}

describe('<DocumentCard />', () => {
  it('should render the heading', () => {
    render(<DocumentCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /DocumentCard/i })
    ).toBeInTheDocument()
  })
})
