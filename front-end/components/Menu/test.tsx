import { fireEvent, render, screen } from 'utils/test-utils'

import Menu from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  query: {}
}))

describe('<Menu />', () => {
  it('should render the menu', () => {
    render(<Menu />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    render(<Menu />)
    //selecionar o menufull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    //verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
    //clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })
    //clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    render(<Menu />)

    expect(screen.getByText(/cadastre-se/i)).toBeInTheDocument()
    expect(screen.getAllByText(/entrar/i)).toHaveLength(2)
    expect(screen.queryByText(/favoritos/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/minha conta/i)).not.toBeInTheDocument()
  })

  it('should show wishlist e my profile when logged in', () => {
    render(<Menu username="mike" />)

    expect(screen.getAllByText(/minha conta/i)).toHaveLength(2)
    expect(screen.getAllByText(/favoritos/i)).toHaveLength(2)
    expect(screen.queryByText(/cadastre-se/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/entrar/i)).not.toBeInTheDocument()
  })

  it('should not show sign in or dropdownUser if loading', () => {
    render(<Menu username="mike" loading />)

    expect(screen.queryByText(/minha conta/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/entrar/i)).not.toBeInTheDocument()
  })
})
