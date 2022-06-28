import { render, screen } from 'utils/test-utils'

import Select from '.'

const props = {
  label: 'Super Categoria',
  name: 'fatherId',
  initialValue: 'Selecione uma super categoria',
  disabled: false,
  items: [
    { id: '123', title: 'Backend' },
    { id: '234', title: 'Frontend' }
  ]
}

describe('<Select />', () => {
  it('should render the heading', () => {
    render(<Select {...props} />)

    expect(screen.getByLabelText(/super categoria/i)).toBeInTheDocument()
  })
})
