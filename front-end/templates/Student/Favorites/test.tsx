import { render, screen } from 'utils/test-utils'

import Favorites from '.'

const props = {
  student: {
    name: 'Mike',
    lastName: 'Santos',
    imageUrl:
      'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg',
    isAdmin: false,
    points: 0
  },
  videos: [],
  documents: []
}

describe('<Favorites />', () => {
  it('should render the heading', () => {
    render(<Favorites {...props} />)

    expect(
      screen.getByRole('heading', { name: /Favorites/i })
    ).toBeInTheDocument()
  })
})
