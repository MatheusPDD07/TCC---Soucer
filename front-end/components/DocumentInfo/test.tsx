import { render, screen } from 'utils/test-utils'

import DocumentInfo from '.'

describe('<DocumentInfo />', () => {
  it('should render the heading', () => {
    render(
      <DocumentInfo
        id="string"
        isFavorite
        keys="string"
        stars={5}
        title="string"
        views={4}
      />
    )

    expect(
      screen.getByRole('heading', { name: /DocumentInfo/i })
    ).toBeInTheDocument()
  })
})
