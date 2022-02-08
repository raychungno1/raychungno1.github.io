import styled from "styled-components";

import stars from "../../images/stars.jpg";

export const Image = styled.div`
  background-image: url(${stars});
  background-size: cover;
  background-position: bottom;
  /* background: gray; */
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;

  transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
`;

export const Content = styled.div`
  /* height: 75%; */
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

  @media (hover) and (min-width: 680px) {
    transform: translateY(50%);
    transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);

    > *:not(.title-container) {
      opacity: 0;
      transition: opacity 700ms cubic-bezier(0.19, 1, 0.22, 1);
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
  position: relative;

  @media (min-width: 680px) {
    height: 300px;
  }

  @media (hover: hover) {
    :hover {
      ${Content} {
        transform: translateY(0);
      }

      ${Content} > *:not(.title-container) {
        opacity: 1;
      }

      ${Image} {
        transform: translateY(-4%);
      }
    }
  }
`;
