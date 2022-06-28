import { render, screen } from 'utils/test-utils'

import VideosTable from '.'

describe('<VideosTable />', () => {
  it('should render the heading', () => {
    const { container } = render(<VideosTable />)

    expect(screen.getByRole('heading', { name: /VideosTable/i })).toBeInTheDocument()
  })
})
