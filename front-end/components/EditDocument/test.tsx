import { render, screen } from 'utils/test-utils'

import EditDocument from '.'

const props = {
  topics: [],
  id: 'string',
  title: 'string',
  urlDocument: 'string',
  topicId: 'string',
  keys: 'string'
}

describe('<EditDocument />', () => {
  it('should render the heading', () => {
    render(<EditDocument {...props} />)

    expect(
      screen.getByRole('heading', { name: /EditDocument/i })
    ).toBeInTheDocument()
  })
})
