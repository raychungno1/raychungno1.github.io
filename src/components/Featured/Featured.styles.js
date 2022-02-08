import styled from "styled-components";

export const Content = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 2em;

  flex-direction: column;
  @media (min-width: 680px) {
    flex-direction: row;
  }
`;
