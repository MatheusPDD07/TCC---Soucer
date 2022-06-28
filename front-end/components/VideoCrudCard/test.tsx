import { render, screen } from 'utils/test-utils'

import VideoCrudCard from '.'

const props = {
  id: 'string',
  topic: {
    id: 'string',
    title: 'string'
  },
  title: 'string',
  urlVideo: 'string',
  star: 1,
  keys: 'string',
  views: 2,
  thumbnail: 'string',
  student: {
    id: 'string',
    name: 'string',
    lastName: 'string',
    imageUrl: 'string',
    userName: 'string',
    email: 'string'
  },
  isFavorite: false,
  topics: []
}

describe('<VideoCrudCard />', () => {
  it('should render the heading', () => {
    render(<VideoCrudCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /VideoCrudCard/i })
    ).toBeInTheDocument()
  })
})
