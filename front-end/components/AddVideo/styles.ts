import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import * as FormStyles from 'components/Form'
import * as ButtonStyles from 'components/Button/styles'
import * as SelectStyles from 'components/Select/styles'
import * as TextfildsStyles from 'components/TextField/styles'

export const Wrapper = styled.main`
  ${media.lessThan('medium')`
    ${FormStyles.FormWrapper} form {
      label {
        display: none;
      }

      ${SelectStyles.Wrapper},
      ${TextfildsStyles.Wrapper},
      ${ButtonStyles.Wrapper} {
        margin: 0 !important;
      }
    }
  `}
`

export const File = styled.div`
  width: 100%;
  label {
    font-size: 1.4rem;
  }
`

export const FileContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
    background: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    margin: 0 0 ${theme.spacings.xxsmall};
    position: relative;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.secondary};
    }

    p {
      left: 1.6rem;
      position: absolute;
      color: ${theme.colors.placeholders};
      font-weight: ${theme.font.medium};
      z-index: 90;
    }

    input {
      color: ${theme.colors.darkGray};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      padding: 1rem ${theme.spacings.xsmall};
      background: transparent;
      border: 0;
      outline: none;
      flex-grow: 1;
      opacity: 0;
      z-index: 91;

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

    ${media.lessThan('medium')`
      margin: 0;
      p {
        line-height:1;
      }
    `}
  `}
`

export const TagContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
    background: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    padding: 1rem ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    margin: ${theme.spacings.xxsmall} 0;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.secondary};
    }

    input {
      color: ${theme.colors.darkGray};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background: transparent;
      border: 0;
      outline: none;
      flex-grow: 1;

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
    ${media.lessThan('medium')`
      margin: 0;
    `}
  `}
`

export const TagItem = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.mediumGray};
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.3em 0.5em;
    border-radius: ${theme.border.radius};
  `}
`

export const TagText = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.title};
  `}
`

export const CloseBox = styled.div`
  ${({ theme }) => css`
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
  `}
`
