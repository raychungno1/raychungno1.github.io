import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 1200px;
  margin: .5em auto 1em;
  z-index: 10;
  
  .f-header {
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 0.5rem;
    opacity: 0.8;
    margin-bottom: 1rem;
  }

  
  @media (min-width: 680px) {
    margin-top: -1.5em;
    margin-bottom: -1em;
    .f-header {
      font-size: 2.5rem;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 2rem;

  @media (min-width: 680px) {
    grid-template-columns: repeat(3, auto);
  }
`;
