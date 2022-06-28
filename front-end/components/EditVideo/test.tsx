import { render, screen } from 'utils/test-utils'

import EditVideo from '.'

describe('<EditVideo />', () => {
  it('should render the heading', () => {
    render(
      <EditVideo
        id="string"
        keys="string"
        title="string"
        topicId="string"
        urlVideo="string"
        topics={[]}
      />
    )

    expect(
      screen.getByRole('heading', { name: /EditVideo/i })
    ).toBeInTheDocument()
  })
})
