import { render, screen } from 'utils/test-utils'

import TopicsTemplate from '.'

const props = {
  user: {
    name: 'Mike Santos',
    photo:
      'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg'
  },
  topics: [
    {
      id: 'string',
      title: 'string',
      fatherId: 'string',
      description: 'string',
      sons: [],
      topics: []
    }
  ]
}

describe('<TopicsTemplate />', () => {
  it('should render the heading', () => {
    render(<TopicsTemplate user={props.user} topics={props.topics} />)

    expect(screen.getByRole('heading', { name: /Back/i })).toBeInTheDocument()
  })
})
