import { render, screen } from 'utils/test-utils'

import AddDocument from '.'

describe('<AddDocument />', () => {
  it('should render correctly', () => {
    render(<AddDocument topics={[]} />)

    expect(screen.getByPlaceholderText(/Ex: Clean Code/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Categoria do Documento/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Clique aqui e escolha um arquivo/i)
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText(/Digite as palavras-chave/i)
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Adicionar Documento/i })
    ).toBeInTheDocument()
  })
})
