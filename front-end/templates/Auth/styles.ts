import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
  `}
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    ${media.lessThan('huge')`
      padding: ${theme.spacings.large};
    `}

    ${media.lessThan('medium')`
      display: none;
    `}

    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${theme.colors.primary};
      opacity: 0.85;
    }
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    gap: 8rem;
    position: relative;
    z-index: ${theme.layers.base};

    ${HeadingStyles.Wrapper} {
      width: 75%;
      text-align: center;
      text-transform: uppercase;
      line-height: 1;
    }

    a {
      width: fit-content;
      height: fit-content;
    }
  `}
`

export const BannerTitle = styled.h1`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.white};
    line-height: 1;
    text-align: center;
    padding: 0 6rem;
    font-size: 3.6rem;
  `}
`

export const FormTitle = styled.h2`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.title};
    line-height: 1;
    text-align: center;
    margin: ${theme.spacings.medium} 0;
  `}
`

export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan('medium')`
      width: 43rem;
    `}

    ${HeadingStyles.Wrapper} {
      margin: ${theme.spacings.medium} 0;
      text-align: center;
      text-transform: uppercase;
      line-height: 1;
    }
  `}
`

export const LogoBox = styled.div`
  width: 100%;
  text-align: center;
`
