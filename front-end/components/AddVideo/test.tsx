import { render, screen } from 'utils/test-utils'

import AddVideo from '.'

describe('<AddVideo />', () => {
  it('should render the heading', () => {
    render(<AddVideo topics={[]} />)

    expect(
      screen.getByRole('heading', { name: /AddVideo/i })
    ).toBeInTheDocument()
  })
})
