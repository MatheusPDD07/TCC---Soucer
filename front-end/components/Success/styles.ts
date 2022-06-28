import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      color: ${theme.colors.title};
    }
    p {
      color: ${theme.colors.darkGray};
    }
  `}
`

export const CheckBox = styled.div`
  ${({ theme }) => css`
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.success};
    margin-bottom: ${theme.spacings.small};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      left: 10rem;
      display: block;
      background-color: ${theme.colors.success};
    }

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      right: 10rem;
      display: block;
      background-color: ${theme.colors.success};
    }
  `}
`
