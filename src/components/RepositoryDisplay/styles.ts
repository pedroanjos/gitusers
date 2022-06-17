import styled from "styled-components";

export const RepositoryDisplayContainer = styled.div`
  width: 45%;
  border: 1px solid #30363d;
  margin: 1%;
  border-radius: 4px;
  height: 150px;
  word-break: break-all;
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  gap: 8px;
  flex-wrap: wrap;
  text-align: left;

  p {
    margin: 0;
  }

  .width-100 {
    width: 100%;
  }

  p {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;
