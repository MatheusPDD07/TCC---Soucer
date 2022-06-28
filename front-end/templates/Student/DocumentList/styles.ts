import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import * as FormStyles from 'components/Form'
import * as SelectStyles from 'components/Select/styles'
import * as HeadingStyles from 'components/Heading/styles'
import * as TextfildsStyles from 'components/TextField/styles'

export const VideoWrapper = styled.div`
  ${({ theme }) => css`
    .react-tabs__tab-list {
      list-style: none;
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-bottom: ${theme.spacings.medium};

      ${media.greaterThan('medium')`
        gap: 3rem;
      `}
    }

    .react-tabs__tab {
      color: ${theme.colors.title};
      outline: none;
      cursor: pointer;
      font-weight: ${theme.font.bold};
    }

    .react-tabs__tab--selected {
      border-bottom: 3px solid ${theme.colors.secondary};
    }
  `}
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;

  ${media.greaterThan('medium')`
    justify-content: space-between;
    flex-direction: row;

    ${HeadingStyles.Wrapper},
    ${HeadingStyles.Wrapper} h1 {
      margin: 0;
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

    ${media.lessThan('medium')`
      width: 100%;
    `}
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

    ${media.lessThan('medium')`
      padding: ${theme.spacings.small};
    `}
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
