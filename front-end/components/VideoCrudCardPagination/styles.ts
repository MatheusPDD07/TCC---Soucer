import styled, { css } from 'styled-components'

export const ItemsArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .custom-item {
      background-color: ${theme.colors.white};
      border-radius: 8px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      min-width: 40px;
      min-height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0.25rem;
      margin-right: 0.25rem;
      cursor: pointer;
      color: ${theme.colors.tertiary};
    }

    .custom-item--active {
      background-color: ${theme.colors.secondary};
      border-radius: 10px;
      color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      min-width: 40px;
      min-height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
    .custom-item--disable {
      opacity: 0.5;
    }
    .custom-root ul {
      display: flex;
      justify-content: center;
      list-style: none;
      padding: 0;
      margin: 2rem 0 0;
    }
    .custom-go-item {
      align-items: center;
      display: flex;
      font-size: 1rem;
      padding-inline-end: 0.75rem;
      padding-inline-start: 0.75rem;
      width: 150px;
    }
    .custom-go-item input {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      height: 40px;
      width: 100%;
    }
    .custom-progress-bar {
      background-color: ${theme.colors.secondary};
      border-radius: 5px;
      box-shadow: 0 0 4px rgba(52, 129, 255, 0.4);
      height: 3px;
      margin: 1rem 0;
      max-width: 100%;
      transition: width 0.2s ease;
    }
  `}
`
