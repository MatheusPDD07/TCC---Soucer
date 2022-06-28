import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Main = styled.main`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Default = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
  `}
`

export const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;

  img {
    object-fit: cover;
    object-position: center bottom;
  }
`

export const HeroContent = styled(Default)`
  ${({ theme }) => css`
    flex: 1;

    h1 {
      width: 60%;
      line-height: 1;
      font-size: 2.5rem;
      text-transform: uppercase;
      color: ${theme.colors.title};

      ${media.greaterThan('medium')`
        width: 100%;
        font-size: 4rem;
      `}
    }

    p {
      width: 60%;
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.darkGray};
      margin-top: ${theme.spacings.xxsmall};
      margin-bottom: ${theme.spacings.small};

      ${media.greaterThan('medium')`
        width: 50%;
        font-size: ${theme.font.sizes.large};
      `}
    }

    ${media.greaterThan('medium')`
      padding: 8rem 0 6rem;
    `}
  `}
`

export const Copyright = styled(Default)`
  margin-bottom: 2rem;
`
