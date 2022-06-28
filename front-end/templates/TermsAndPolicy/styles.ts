import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 70%;
    margin: 5rem 0;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};
  `}
`
