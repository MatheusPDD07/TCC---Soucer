import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 32rem;
    background-color: ${theme.colors.primary};
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding: ${theme.spacings.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
  `}
`

export const ImageBox = styled.div`
  width: 6rem;
  height: 6rem;
  position: relative;

  img {
    width: 100%;
  }
`

export const ScoreArea = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
  }
`

export const Points = styled.div`
  flex: 1;
`

export const Name = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const ScoreData = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
  `}
`

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
  `}
`

export const Level = styled.div`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    background-color: ${theme.colors.secondary};
    padding: 0.2rem;
    color: ${theme.colors.white};
    margin-top: 0.5rem;
    border-radius: ${theme.border.radius};
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};

    &:hover {
      color: ${darken(0.2, theme.colors.white)};
    }

    &.active {
      background-color: ${theme.colors.tertiary};
      position: relative;

      &::after {
        content: '';
        background-color: ${theme.colors.secondary};
        height: 5px;
        width: 30px;
        position: absolute;
        right: 1rem;
      }
    }
  `}
`

export const Menu = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
