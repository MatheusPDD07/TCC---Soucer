import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal' | 'bgColor'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,

  withIcon: () => css`
    svg {
      width: 3rem;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, minimal, hasIcon, disabled, bgColor }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors[bgColor!]};
    color: ${bgColor !== 'white' ? theme.colors.white : theme.colors.primary};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.medium};
    text-decoration: none;

    &:hover {
      color: ${darken(
        0.2,
        bgColor !== 'white' ? theme.colors.white : theme.colors.primary
      )};
      background: ${minimal ? 'none' : darken(0.2, theme.colors[bgColor!])};
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!hasIcon && wrapperModifiers.withIcon()}
    ${!!minimal && wrapperModifiers.minimal(theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${disabled && wrapperModifiers.disabled()}
  `}
`
