import styled from "@emotion/styled";

export const StyledScrollUp = styled.button`
  background-color: transparent;
  border: 2px solid #113e84;
  border-radius: 50%;
  bottom: 80px;
  cursor: pointer;
  height: 43px;
  margin: 15px;
  opacity: 0.75;
  position: fixed;
  right: 16px;
  transition: all 0.2s linear;
  width: 43px;
  z-index: 99;
  display: none;

  &.active {
    display: block;
  }

  & .arrow {
    position: absolute;
    border: solid #113e84;
    border-width: 0 0 3px 3px;
    width: 6px;
    height: 6px;
    display: inline-block;
    top: 50%;
    left: 50%;

    &.up {
      transform: translate(-50%, -50%) rotate(135deg);
    }
  }

  &:hover {
    background: #113e84;
    border: none;
  }

  &:hover .arrow {
    border: solid #fff;
    border-width: 0 0 3px 3px;
  }
`;
