import { render, screen } from 'utils/test-utils'

import StudentPage from '.'

const props = {
  user: {
    name: 'string',
    lastName: 'string',
    imageUrl: 'string',
    isAdmin: false,
    points: 3
  },
  student: {
    id: 'string',
    name: 'string',
    lastName: 'string',
    imageUrl: 'string',
    email: 'string',
    userName: 'string',
    points: 8,
    videos: [],
    documents: []
  }
}

describe('<StudentPage />', () => {
  it('should render the heading', () => {
    render(<StudentPage {...props} />)

    expect(
      screen.getByRole('heading', { name: /StudentPage/i })
    ).toBeInTheDocument()
  })
})
