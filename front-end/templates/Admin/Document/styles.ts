import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import * as FormStyles from 'components/Form'
import * as ButtonStyles from 'components/Button/styles'
import * as SelectStyles from 'components/Select/styles'
import * as TextfildsStyles from 'components/TextField/styles'

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;

  ${media.lessThan('medium')`
    flex-direction: column;
    gap: 1rem;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.title};
  `}
`

export const FilterHeaderArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;

  ${ButtonStyles.Wrapper} {
    padding: 0 1rem;
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
    margin: ${theme.spacings.xxsmall} 0;
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

export const Close = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: right;
  `}
`

export const ModalContent = styled.div`
  ${({ theme }) => css`
    width: 50%;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    z-index: 60;
  `}
`

export const ModalHeader = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    padding: ${theme.spacings.xsmall} ${theme.spacings.large};
    text-align: center;
    border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;
  `}
`

export const ModalTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.title};
  `}
`

export const ModalBody = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.large};

    ${FormStyles.FormWrapper} form {
      margin-top: 0;
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: space-between;

      ${TextfildsStyles.Wrapper} {
        flex-grow: 1;
      }

      ${SelectStyles.Wrapper} {
        flex-grow: 1;
        margin: ${theme.spacings.xxsmall} 0;
      }
    }

    kbd {
      background-color: ${theme.colors.lightGray};
      color: ${theme.colors.title};
      padding: 2px 4px;
      border-radius: 3px;
    }
  `}
`

export const ModalFooter = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    padding: ${theme.spacings.xsmall} ${theme.spacings.large};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
  `}
`

export const DeleteMessageButtons = styled.div`
  display: flex;
  gap: 2rem;
`
