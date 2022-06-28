import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 32rem;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `}
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

type StatusProps = {
  isBlocked: boolean
}

export const Status = styled.div<StatusProps>`
  ${({ theme, isBlocked }) => css`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    left: 5rem;
    top: 1rem;
    background-color: ${isBlocked ? theme.colors.danger : theme.colors.success};
    z-index: 2;
  `}
`

export const Points = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    padding: 0.25rem ${theme.spacings.xxsmall};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
  `}
`

export const PhotoBox = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Body = styled.div`
  ${({ theme }) => css`
    border-bottom: thin solid ${theme.colors.lightGray};
    padding-bottom: 1.5rem;
  `}
`

export const Name = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.title};
  `}
`

export const UserName = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
  `}
`

export const Email = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.mediumGray};
  `}
`

export const Footer = styled.div`
  display: flex;
  gap: 1rem;
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
