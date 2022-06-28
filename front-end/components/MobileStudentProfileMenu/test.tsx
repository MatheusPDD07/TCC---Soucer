import { render, screen } from 'utils/test-utils'

import MobileStudentProfileMenu from '.'

const props = {
  name: 'Mike Santos',
  photo: '/img/default-image.png',
  point: 5
}

describe('<MobileStudentProfileMenu />', () => {
  it('should render the heading', () => {
    render(<MobileStudentProfileMenu {...props} />)

    expect(
      screen.getByRole('heading', { name: /MobileStudentProfileMenu/i })
    ).toBeInTheDocument()
  })
})
