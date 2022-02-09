import styled from "styled-components";

import stars from "../../images/stars.jpg";

export const Header = styled.div`

`;

export const Image = styled.div`
  background-image: url(${stars});
  background-size: cover;
  background-position: bottom;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;

  transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
`;

export const Content = styled.div`
  padding: 1rem 1.5rem;
  text-align: center;
  background: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 20%,
    rgba(0, 0, 0, 0.8) 100%
  );

  .title-container {
    margin-bottom: 1rem;
  }

  h1 {
    display: inline;
    font-size: 1.5rem;
  }

  p {
    line-height: 1.5;
    font-weight: lighter;
    color: rgba(255, 255, 255, 0.8);
    display: block;
    margin-bottom: 1rem;
  }

  .logos {
    color: white;
    border-top: 4px solid #976322;
    border-bottom: 4px solid #976322;
    width: max-content;
    margin: 0 auto;
    padding: .25rem 1rem;
  }

  @media (hover) and (min-width: 680px) {
    .title-container {
      transform: translateY(120px);
      transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
    }

    > *:not(.title-container) {
      transform: translateY(120px);
      opacity: 0;
      transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1),
        opacity 1400ms cubic-bezier(0.19, 1, 0.22, 1);
    }

    ${Image} {
      transform: translateY(-4%);
    }
  }
`;

export const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  border-radius: 0.5em;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  @media (min-width: 680px) {
    height: 300px;
  }

  @media (hover: hover) {
    :hover {
      ${Content} {
      }
      .title-container {
        transform: translateY(0);
      }

      ${Content} > *:not(.title-container) {
        opacity: 0.8;
        transform: translateY(0);

        transition-delay: 50ms;
      }
    }
  }
`;
