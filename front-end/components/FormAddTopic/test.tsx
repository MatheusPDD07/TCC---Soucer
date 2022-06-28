import { render, screen } from 'utils/test-utils'

import FormAddTopic from '.'

const props = [
  { id: '345', title: 'Back' },
  { id: '456', title: 'Front' }
]

describe('<FormAddTopic />', () => {
  it('should render the form', () => {
    render(<FormAddTopic topicsSelect={props} />)

    expect(screen.getByPlaceholderText(/usuário/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /entrar agora/i })
    ).toBeInTheDocument()
  })
})
