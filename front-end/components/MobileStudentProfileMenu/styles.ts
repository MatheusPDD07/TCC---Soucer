import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const TopMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.3rem;
`

export const UserData = styled.div`
  ${({ theme }) => css`
    padding: 1rem;
    padding-bottom: 1rem;
    border-bottom: thin solid ${theme.colors.lightGray};

    small {
      color: ${theme.colors.darkGray};
    }
  `}
`

export const Name = styled.h3`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.title};
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0.2rem 0;
  `}
`

export const Score = styled.div`
  ${({ theme }) => css`
    padding: 0.15rem;
    border-radius: ${theme.border.radius};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.secondary};

    small {
      color: ${theme.colors.white};
    }
  `}
`

export const ImageBox = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const FooterMenu = styled.div`
  ${({ theme }) => css`
    position: fixed;
    width: 100%;
    padding: 1rem;
    border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    bottom: 0;
    background-color: ${theme.colors.white};
    z-index: ${theme.layers.menu};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    color: ${theme.colors.darkGray};
    border-radius: ${theme.border.radius};

    &.active {
      color: ${theme.colors.secondary};
    }
  `}
`
