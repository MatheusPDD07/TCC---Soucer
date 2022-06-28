import { render, screen } from 'utils/test-utils'
import FormSignIn from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    render(<FormSignIn />)

    expect(screen.getByPlaceholderText(/usuário/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /entrar agora/i })
    ).toBeInTheDocument()
  })

  it('should render the forgot password link', () => {
    render(<FormSignIn />)
    expect(
      screen.getByRole('link', { name: /esqueci minha senha/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    render(<FormSignIn />)
    expect(screen.getByText(/ainda não tem uma conta\?/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /cadastre-se/i })
    ).toBeInTheDocument()
  })
})
