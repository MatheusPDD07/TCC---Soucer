import { render, screen } from 'utils/test-utils'

import AdminBreadcrumb from '.'

const props = {
  title: 'Categorias'
}

describe('<AdminBreadcrumb />', () => {
  it('should render the heading', () => {
    render(<AdminBreadcrumb {...props} />)

    expect(screen.getByText(/categorias/i)).toBeInTheDocument()
  })
})
