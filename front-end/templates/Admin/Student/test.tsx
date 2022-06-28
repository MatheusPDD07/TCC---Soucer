import { render, screen } from 'utils/test-utils'

import Student from '.'

const props = {
  user: {
    name: 'Mike Santos',
    photo: '/img/default-image.png'
  },
  student: [
    {
      id: 'string',
      photo: 'string',
      fullName: 'string',
      userName: 'string',
      email: 'string',
      points: 1,
      isBlocked: false
    }
  ]
}

describe('<Student />', () => {
  it('should render the heading', () => {
    render(<Student user={props.user} students={props.student} />)

    expect(
      screen.getByRole('heading', { name: /mike santos/i })
    ).toBeInTheDocument()
  })
})
