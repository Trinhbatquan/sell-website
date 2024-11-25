import styled from "@emotion/styled";

export const StyledScrollUp = styled.div`
  position: fixed;
  bottom: 6rem;
  right: 2rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 500ms ease, visibility 500ms ease;
  z-index: 1000000;
  background-color: #fff;
  padding: 0.32rem 0.5rem;
  border-radius: 50%;
  border: 1px solid #000;
  cursor: pointer;

  svg {
    cursor: pointer;
  }

  &.active {
    opacity: 1;
    visibility: visible;
  }
`;
