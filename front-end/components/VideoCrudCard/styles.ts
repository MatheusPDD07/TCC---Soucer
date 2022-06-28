import { darken } from 'polished'
import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import * as FormStyles from 'components/Form'
import * as ButtonStyles from 'components/Button/styles'
import * as SelectStyles from 'components/Select/styles'
import * as TextfildsStyles from 'components/TextField/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    position: relative;
    border-radius: ${theme.border.radius};
    overflow: hidden;

    ${media.greaterThan('medium')`
      width: 31rem;
    `}
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    cursor: pointer;

    h3 {
      color: ${theme.colors.title};

      &:hover {
        color: ${darken(0.1, theme.colors.title)};
      }
    }
  `}
`

export const Cover = styled.div`
  width: 100%;
  height: 15.2rem;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  &:hover img {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
`

export const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    width: 75%;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0.2rem 0;
    color: ${theme.colors.title};
  `}
`

export const Stats = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
    margin-bottom: 1rem;
    border-bottom: thin solid ${theme.colors.lightGray};
  `}
`

export const StatsBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.title};
  `}
`

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    ${ButtonStyles.Wrapper} {
      padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    }
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
