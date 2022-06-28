import userEvent from '@testing-library/user-event'

import { render, screen } from 'utils/test-utils'

import UserDropdown from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  query: {}
}))

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="anorak" />)

    expect(screen.getByText('anorak')).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="anorak" />)

    userEvent.click(screen.getByText(/anorak/i))

    expect(
      screen.getByRole('link', { name: /minha conta/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /favoritos/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sair/i })).toBeInTheDocument()
  })
})
