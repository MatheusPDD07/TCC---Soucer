import { render, screen } from 'utils/test-utils'

import Dashboard from '.'

const props = {
  name: 'Mike',
  lastName: 'Santos',
  photo:
    'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg',
  isAdmin: false,
  points: 10
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

describe('<Dashboard />', () => {
  it('should render the heading', () => {
    render(
      <Dashboard
        student={props}
        videos={[]}
        documents={[]}
        students={[]}
        countVideos={1}
        countDocuments={1}
        countStudents={1}
      />
    )

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()
  })
})
