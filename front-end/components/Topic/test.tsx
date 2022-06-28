import { MdCode } from 'react-icons/md'

import { render, screen } from 'utils/test-utils'

import Topic from '.'

describe('<Topic />', () => {
  it('should render the heading', () => {
    render(
      <Topic icon={<MdCode />} slug="programacao-ti" title="Programação e TI" />
    )

    expect(
      screen.getByRole('heading', { name: /programação e ti/i })
    ).toBeInTheDocument()
  })
})
