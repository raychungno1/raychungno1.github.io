import styled from "styled-components";

import stars from "../../images/stars.jpg";

export const Content = styled.div`
  padding: 1rem 1.5rem;
  background: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 20%,
    rgba(0, 0, 0, 1) 100%
  );
  transform: translateY(70%);
  transition: transform 500ms ease;

  .title-container {
    margin-bottom: 1rem;
  }

  h1 {
    position: relative;
    width: max-content;
    max-width: 100%;
    display: inline;
    font-size: 1.25rem;

    ::after {
      content: "";
      position: absolute;
      height: 4px;
      background: #976322;
      width: calc(100% + 2rem);
      left: -1.5rem;
      bottom: -4px;
      transform: scaleX(0);
      transform-origin: left;

      transition: transform 500ms ease;
    }
  }

  p {
    line-height: 1.5;
    font-weight: lighter;
    color: rgba(255, 255, 255, 0.8);
  }

  > *:not(.title-container) {
    opacity: 0;
    transition: opacity 500ms linear;
  }
`;

export const Wrapper = styled.div`
  background-image: url(${stars});
  background-size: cover;
  height: 300px;
  width: 100%;
  border-radius: 0.5em;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  transition: transform 500ms ease;

  :hover {
    transform: scale(1.05);

    h1::after {
      transform: scaleX(1);
    }

    ${Content} {
      transform: translateY(0);
      transition-delay: 500ms;
    }

    ${Content} > *:not(.title-container) {
      opacity: 1;
      transition-delay: 750ms;
    }
  }
`;
