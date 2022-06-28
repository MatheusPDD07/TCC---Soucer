import { render, screen } from 'utils/test-utils'

import DocumentsStats from '.'

import mock from './mock'

const props = { documents: mock, title: 'string' }

describe('<DocumentsStats />', () => {
  it('should render the heading', () => {
    render(<DocumentsStats {...props} />)

    expect(
      screen.getByRole('heading', { name: /DocumentsStats/i })
    ).toBeInTheDocument()
  })
})
