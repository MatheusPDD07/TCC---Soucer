import styled, { css, DefaultTheme } from 'styled-components'

import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
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

    input {
      color: ${theme.colors.darkGray};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
      background: transparent;
      border: 0;
      outline: none;
      width: ${iconPosition === 'right' ? `calc(100% - 2.2rem)` : `100%`};

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

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.placeholders};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 2.2rem;
      height: 100%;
    }
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
    ${Icon},
    ${Label} {
      color: ${theme.colors.danger};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    input,
    ${Icon} {
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
