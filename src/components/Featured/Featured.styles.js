import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  
  .f-header {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
    opacity: 0.5;
    margin-bottom: 1rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 2rem;

  @media (min-width: 680px) {
    grid-template-columns: repeat(3, auto);
  }
`;
