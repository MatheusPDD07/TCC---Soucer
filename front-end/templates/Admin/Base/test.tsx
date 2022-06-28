import { render, screen } from 'utils/test-utils'

import Base from '.'

const props = {
  name: 'Mike Santos',
  photo:
    'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg'
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

describe('<Base />', () => {
  it('should render the heading', () => {
    render(
      <Base user={props}>
        <h1>Base</h1>
      </Base>
    )

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()
  })
})
