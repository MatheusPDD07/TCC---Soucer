import { render, screen } from 'utils/test-utils'

import Hero from '.'

describe('<Hero />', () => {
  it('should render the heading', () => {
    render(
      <Hero name="user" countDocuments={10} countStudents={5} countVideos={6} />
    )

    expect(screen.getByRole('heading', { name: /Hero/i })).toBeInTheDocument()
  })
})
