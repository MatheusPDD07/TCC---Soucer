import { render, screen } from 'utils/test-utils'

import Profile from '.'

const props = {
  student: {
    name: 'Mike',
    lastName: 'Santos',
    userName: 'mike',
    email: 'mike@gmail.com',
    phoneNumber: '21978794645',
    scholarity: 'Ensino Médio Completo',
    institution: 'Estácio de Sá',
    imageUrl:
      'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg',
    isAdmin: false,
    points: 0
  }
}

describe('<Profile />', () => {
  it('should render the heading', () => {
    render(<Profile {...props} />)

    expect(
      screen.getByRole('heading', { name: /Profile/i })
    ).toBeInTheDocument()
  })
})
