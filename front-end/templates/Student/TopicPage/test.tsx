import { render, screen } from 'utils/test-utils'

import TopicPage from '.'

const props = {
  user: {
    name: 'string',
    lastName: 'string',
    imageUrl: 'string',
    isAdmin: false,
    points: 2
  },
  topic: {
    title: 'string',
    description: 'string',
    videos: [],
    documents: []
  }
}

describe('<TopicPage />', () => {
  it('should render the heading', () => {
    render(<TopicPage {...props} />)

    expect(
      screen.getByRole('heading', { name: /TopicPage/i })
    ).toBeInTheDocument()
  })
})
