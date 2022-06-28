import { render, screen } from 'utils/test-utils'

import StudentsStats from '.'

describe('<StudentsStats />', () => {
  it('should render the heading', () => {
    render(<StudentsStats students={[]} title="string" />)

    expect(
      screen.getByRole('heading', { name: /StudentsStats/i })
    ).toBeInTheDocument()
  })
})
