import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import { HeadingProps } from '.'

type WrapperPorps = Pick<HeadingProps, 'title' | 'color'>

export const Wrapper = styled.div<WrapperPorps>`
  ${({ theme, title, color }) => css`
    text-align: center;

    ${media.lessThan('medium')`
      width: 100%;
    `}

    h1 {
      width: 100%;
      margin: 0 auto;
      color: ${color === 'color' ? theme.colors.title : theme.colors.white};
      text-transform: uppercase;
      font-weight: ${theme.font.bold};
      position: relative;
      font-size: 3rem;

      &::before {
        content: '${title}';
        font-size: 4rem;
        position: absolute;
        top: -0.75rem;
        bottom: 0;
        left: 0;
        right: 0;
        color: ${color === 'color' ? theme.colors.title : theme.colors.white};
        opacity: 0.1;
        text-align: center;
      }

      ${media.greaterThan('medium')`
        width: 50%;
        font-size: 4rem;

        &::before {
          font-size: 6.4rem;
          top: -1.7rem;
        }
      `}
    }

    p {
      margin-top: ${theme.spacings.xxsmall};
      color: ${color === 'color' ? theme.colors.title : theme.colors.white};
      font-weight: ${theme.font.regular};
    }
  `}
`
