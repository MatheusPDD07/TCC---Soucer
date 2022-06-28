import { render, screen } from 'utils/test-utils'
import { MdAddShoppingCart } from 'react-icons/md'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    render(<Button>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      'font-size': '1.4rem',
      padding: '0.8rem 3.2rem'
    })
  })

  it('should render the small size is passed', () => {
    render(<Button size="small">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size is passed', () => {
    render(<Button size="large">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    render(
      <Button icon={<MdAddShoppingCart data-testid="icon" />}>Buy Now</Button>
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByText(/Buy Now/i)).toBeInTheDocument()
  })

  it('should render a minimal version', () => {
    render(
      <Button icon={<MdAddShoppingCart data-testid="icon" />} minimal>
        Buy Now
      </Button>
    )

    const button = screen.getByRole('button', { name: /buy now/i })
    expect(button).toHaveStyle({
      background: 'none',
      color: '#214888'
    })
    expect(button).toHaveStyleRule('background', 'none', {
      modifier: ':hover'
    })
  })

  it('should render button as a link', () => {
    render(
      <Button as="a" href="/link">
        Buy Now
      </Button>
    )
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('should render a disabled button', () => {
    render(<Button disabled>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })
})
