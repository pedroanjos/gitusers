import styled from "styled-components";

export const PaginationNumber = styled.button`
  background-color: transparent;
  border-color: #c9d1d9;
  color: #c9d1d9;
  cursor: pointer;
  margin-top: 8px;

  &:first-of-type {
    border-radius: 4px 0px 0px 4px;
  }

  &:last-of-type {
    border-radius: 0px 4px 4px 0px;
  }

  &:hover {
    background-color: #555;
  }
  &:disabled {
    color: #999;
    border-color: #999;
    background-color: transparent;
    cursor: not-allowed;
  }
`;
