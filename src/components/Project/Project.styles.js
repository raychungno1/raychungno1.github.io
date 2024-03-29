import styled from "styled-components";

export const Image = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  object-fit: cover;

  transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
`;

export const Content = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
  text-align: center;
  background: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 10%,
    rgba(0, 0, 0, 0.9) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .title-container {
    margin-bottom: 1rem;
  }

  h1 {
    display: inline;
    font-size: 1.5rem;
  }

  p {
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.8);
    display: block;
    margin-bottom: 1rem;
    font-family: "Source Code Pro", monospace;
  }

  .logos {
    color: white;
    border-top: 2px solid #976322;
    border-bottom: 2px solid #976322;
    margin: 0 auto;
    padding: 0.25rem 1rem;
    height: 2.5rem;
    display: flex;
    gap: 0.5em;
    align-items: center;
    justify-content: center;
  }

  .tooltip {
    position: relative;
    height: 100%;
  }

  .tooltip__text {
    opacity: 0;
    font-family: "Source Code Pro", monospace;
    background-color: #1d1c21;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    //border-radius: 6px;
    position: absolute;
    z-index: 2;
    width: 110px;
    bottom: 110%;
    left: 50%;
    margin-left: -55px;
    transition: opacity 700ms cubic-bezier(0.19, 1, 0.22, 1);
    outline: 2px solid #976322;
  }
  @media (hover) {
    .tooltip:hover .tooltip__text {
      opacity: 1;
    }
  }

  @media (hover) and (min-width: 680px) {
    transform: translateY(65%);
    transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);

    p {
      min-height: 5em;
    }

    > *:not(.title-container) {
      opacity: 0;
      transition: opacity 1400ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  height: 250px;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  @media (min-width: 400px) {
    height: 200px;
  }

  @media (min-width: 680px) {
    height: 350px;
  }
  
  @media (min-width: 1000px) {
    height: 300px;
  }

  @media (hover: hover) and (min-width: 680px) {
    :hover {
      ${Content} {
        transform: translateY(0);
      }

      ${Content} > *:not(.title-container) {
        opacity: 0.8;
        transition-delay: 50ms;
      }

      ${Image} {
        transform: translateY(-4%) scale(1.1);
      }
    }
  }
`;

export const Tech = styled.img`
  height: 100%;
  display: block;
`;
