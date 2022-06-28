import { render, screen } from 'utils/test-utils'

import Video from '.'

const props = {
  user: {
    name: 'Mike Santos',
    photo: '/img/default-image.png'
  },
  videos: [
    {
      id: 'string',
      topic: { id: 'string', title: 'string' },
      title: 'string',
      urlVideo: 'string',
      star: 1,
      keys: 'string',
      views: 1,
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
  ],
  topics: [
    { id: '01', title: 'zero um' },
    { id: '02', title: 'zero um' }
  ]
}

describe('<Video />', () => {
  it('should render the heading', () => {
    render(<Video {...props} />)

    expect(screen.getByRole('heading', { name: /Video/i })).toBeInTheDocument()
  })
})
