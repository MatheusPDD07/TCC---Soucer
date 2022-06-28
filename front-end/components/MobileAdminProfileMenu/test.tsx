import { render, screen } from 'utils/test-utils'

import MobileAdminProfileMenu from '.'

const props = {
  name: 'Mike Santos',
  photo: '/img/default-image.png'
}

describe('<MobileAdminProfileMenu />', () => {
  it('should render the heading', () => {
    render(<MobileAdminProfileMenu {...props} />)

    expect(
      screen.getByRole('heading', { name: /MobileAdminProfileMenu/i })
    ).toBeInTheDocument()
  })
})
