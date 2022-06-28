import media from 'styled-media-query'
import styled, { css } from 'styled-components'

type WrapperProps = {
  isAdmin: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isAdmin }) => css`
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.primary};
    position: relative;
    border-radius: ${theme.border.radius};

    ${media.lessThan('medium')`
      padding: 2rem;
      flex-direction: column;
      ${!isAdmin && 'height: 50rem'}
    `}
  `}
`

export const HeroContent = styled.div`
  ${({ theme }) => css`
    width: 45%;

    ${media.lessThan('medium')`
      width: 100%;
    `}

    h1 {
      color: ${theme.colors.white};
      text-transform: uppercase;
      line-height: 1.1;
    }

    p {
      margin-bottom: 2rem;
      color: ${theme.colors.white};

      span {
        color: ${theme.colors.secondary};
      }
    }
  `}
`

export const HeroImage = styled.div`
  width: 39.1rem;
  height: 24.5rem;
  position: absolute;
  bottom: 0;
  right: 3rem;

  ${media.lessThan('medium')`
    width: 100%;
    right: 0;
  `}

  @media (max-width: 376px) {
    height: 22.5rem;
  }

  @media (max-width: 321px) {
    height: 18.5rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const DataArea = styled.div`
  ${({ theme }) => css`
    h3 {
      text-align: center;
      line-height: 1.1;
      margin-bottom: 1rem;
      text-transform: uppercase;
      color: ${theme.colors.white};
    }

    ${media.greaterThan('medium')`
      border-left: thin solid white;
      padding-left: 4rem;
    `}
  `}
`

export const Data = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  ${media.lessThan('medium')`
    flex-direction: column;
    gap: 1rem;
  `}
`

export const Box = styled.div`
  ${({ theme }) => css`
    width: 14rem;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};

    h1,
    p {
      display: flex;
    }

    h1 {
      height: 3.5rem;
      color: ${theme.colors.title};
    }

    p {
      color: ${theme.colors.darkGray};
    }

    ${media.lessThan('medium')`
      width: 100%;
      flex-direction: column;
      gap: 1rem;
    `}
  `}
`
