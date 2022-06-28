import styled, { css, DefaultTheme } from 'styled-components'

import { SelectProps } from '.'

type WrapperProps = Pick<SelectProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.secondary};
    }

    select {
      color: ${theme.colors.placeholders};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.xxsmall} 0;
      background: transparent;
      border: 0;
      outline: none;
      width: 100%;

      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
          ${theme.colors.lightGray} inset;
        filter: none;

        &::first-line {
          font-family: ${theme.font.family};
          font-size: ${theme.font.sizes.medium};
        }
      }
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.danger};
    }

    ${Label} {
      color: ${theme.colors.danger};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    input {
      cursor: not-allowed;
      color: ${theme.colors.mediumGray};

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
