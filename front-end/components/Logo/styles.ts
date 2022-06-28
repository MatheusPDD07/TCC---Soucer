import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,

  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 7rem;

      svg{
        height: 7rem;
        pointer-events: none;
      }

      .text{
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    ${!!size && wrapperModifiers[size]};
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile};

    svg {
      .slogan {
        fill: ${color === 'white' ? theme.colors.white : theme.colors.primary};
      }
      .name {
        fill: ${color === 'white' ? theme.colors.white : theme.colors.black};
      }
      .simbolBackground {
        fill: ${color === 'white'
          ? theme.colors.white
          : theme.colors.mediumGray};
      }
    }
  `}
`
