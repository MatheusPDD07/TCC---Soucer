import { render, screen } from 'utils/test-utils'

import Document from '.'

const props = {
  user: {
    name: 'Mike Santos',
    photo: '/img/default-image.png'
  },
  docs: [
    {
      id: 'string',
      title: 'string',
      urlDocument: 'string',
      topicId: 'string',
      stars: 1,
      keys: 'string',
      views: 1,
      student: {
        id: 'string',
        name: 'string',
        lastName: 'string',
        imageUrl: 'string'
      },
      topics: []
    }
  ],
  topics: [
    { id: '01', title: 'zero um' },
    { id: '02', title: 'zero um' }
  ]
}

describe('<Document />', () => {
  it('should render the heading', () => {
    render(<Document {...props} />)

    expect(
      screen.getByRole('heading', { name: /Document/i })
    ).toBeInTheDocument()
  })
})
