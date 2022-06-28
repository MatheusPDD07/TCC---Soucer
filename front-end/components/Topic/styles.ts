import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 20rem;
    background-color: ${theme.colors.white};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    transition: 0.5s;

    &:hover {
      background-color: ${theme.colors.secondary};

      ${IconBox} {
        color: ${theme.colors.secondary};
        background-color: ${theme.colors.white};
      }

      ${Title} {
        color: ${theme.colors.white};
      }
    }
  `}
`

export const IconBox = styled.div`
  ${({ theme }) => css`
    width: 8rem;
    height: 6.6rem;
    background-color: ${theme.colors.secondary};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.title};
  `}
`
