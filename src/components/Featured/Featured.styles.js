import styled from "styled-components";

export const Content = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;

  @media (min-width: 680px) {
    grid-template-columns: repeat(3, auto);
  }
`;
