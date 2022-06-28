import { render, screen } from 'utils/test-utils'

import TermsAndPolicy from '.'

describe('<TermsAndPolicy />', () => {
  it('should render the heading', () => {
    render(<TermsAndPolicy />)

    expect(
      screen.getByRole('heading', { name: /Termos de Uso/i })
    ).toBeInTheDocument()
  })
})
