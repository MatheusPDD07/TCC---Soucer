import { render } from 'utils/test-utils'

import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 form {
        margin-top: 2.4rem;
      }

      .c1 {
        font-size: 1.4rem;
        color: #121212;
        text-align: center;
      }

      .c1 a {
        color: #3481FF;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c1 a:hover {
        color: #9ac0ff;
      }

      <body>
        <div>
          <div
            class="c0"
          >
            <div
              class="c1"
            >
              My nice
              <a
                href="#"
              >
                link
              </a>
            </div>
          </div>
        </div>
      </body>
    `)
  })
})
