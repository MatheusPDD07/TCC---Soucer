import { lighten } from 'polished'
import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'
import * as TextFieldStyles from 'components/TextField/styles'

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }
    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.xsmall} auto;
    }

    form {
      margin-top: ${theme.spacings.small};
    }
  `}
`

export const FormLoading = styled.img.attrs(() => ({
  src: '/img/dots.svg',
  alt: 'Waiting...'
}))`
  width: 4rem;
`

export const FormSuccess = styled.div`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    padding: ${theme.spacings.xxsmall};
    color: #198754;
    background-color: #d1e7dd;

    svg {
      width: 2.4rem;
    }
  `}
`

export const FormError = styled.div`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    padding: ${theme.spacings.xxsmall};
    color: #dc3545;
    background-color: #f8d7da;
  `}
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: center;

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;

      &:hover {
        color: ${lighten(0.2, theme.colors.secondary)};
      }
    }
  `}
`
