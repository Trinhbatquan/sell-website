import styled from "@emotion/styled";
import { Theme } from "@mui/material";

export const StyledHeader = styled.div`
  height: 90px;
  button:focus,
  button:focus-visible {
    outline: none;
  }

  .logo {
    width: 76px;
    height: auto;
    object-fit: contain;
  }

  .link {
    font-family: ${({ theme }) => (theme as Theme).typography.fontFamily};
    font-size: ${({ theme }) => `${(theme as Theme).typography.h6.fontSize}px`};
    color: #fff;
    font-weight: lighter;
    padding: 0.25rem;

    &.active {
      font-weight: bold;
    }
  }

  .search {
    border-radius: 1rem;
    padding: 0.25rem 0.5rem;
    height: 28px;
    background-color: #977c7c;
    width: 225px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.25rem;
    margin-right: 1rem;

    .input-container {
      ::before,
      ::after {
        display: none;
      }
      input {
        color: #ccc;
        padding-block: 4px;
      }
    }
  }
`;
