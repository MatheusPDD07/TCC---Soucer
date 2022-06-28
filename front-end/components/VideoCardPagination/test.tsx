import { render, screen } from 'utils/test-utils'

import VideoCardPagination from '.'

import mock from './mock'

const props = { items: mock }

describe('<VideoCardPagination />', () => {
  it('should render the heading', () => {
    render(<VideoCardPagination {...props} />)

    expect(
      screen.getByRole('heading', { name: /VideoCardPagination/i })
    ).toBeInTheDocument()
  })
})
