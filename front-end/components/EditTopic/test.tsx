import { render, screen } from 'utils/test-utils'

import EditTopic from '.'

describe('<EditTopic />', () => {
  it('should render the heading', () => {
    render(
      <EditTopic
        id="string"
        description="string"
        fatherId="string"
        title="string"
        topics={[]}
      />
    )

    expect(
      screen.getByRole('heading', { name: /EditTopic/i })
    ).toBeInTheDocument()
  })
})
