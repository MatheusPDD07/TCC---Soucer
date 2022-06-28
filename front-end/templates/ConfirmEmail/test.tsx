import { render, screen } from 'utils/test-utils'

import ConfirmEmail from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

describe('<ConfirmEmail />', () => {
  it('should render the heading', () => {
    render(<ConfirmEmail isConfirmed />)

    expect(
      screen.getByRole('heading', { name: /e-mail confirmado/i })
    ).toBeInTheDocument()
  })
})
