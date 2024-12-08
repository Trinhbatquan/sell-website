import styled from "@emotion/styled";

export const StyledHotProductCard = styled.div`
  width: 99%;
  height: 180px;
  margin-left: 0.25rem;
  cursor: pointer;

  > * {
    height: 100%;
  }

  .left-content {
    border-top-left-radius: 1rem;
    background-color: #8d5e2f;
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 1.5rem;
    color: #fdcc7f;
  }

  .right-content {
    border-bottom-right-radius: 1rem;
    background-color: #fff;
    img {
      width: 90%;
      height: auto;
      object-fit: contain;
    }
  }

  .MuiGrid2-container {
    --Grid-columnSpacing: 0;
  }
`;
