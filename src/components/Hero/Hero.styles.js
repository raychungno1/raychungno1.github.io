import styled from "styled-components";

// Images
import bg from "../../images/low-poly.svg";
import wavesTop from "../../images/waves-top.svg";
import wavesBottom from "../../images/waves-bottom.svg";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 700px;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;

  @media (max-width: 1280px) {
    height: 50vw;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;

  h1 {
    text-align: right;
    font-size: min(17vw, 225px);
    line-height: 1;
    font-style: italic;
    /* font-weight: 400; */
    text-transform: uppercase;
  }

  .name {
    position: absolute;
    left: 6%;
    top: 10%;

    @media (max-width: 680px) {
      left: 10%;
    }
  }
`;

const Wave = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
`;

export const WaveBottom = styled(Wave)`
  background-image: url(${wavesBottom});
`;

export const WaveTop = styled(Wave)`
  background-image: url(${wavesTop});

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 105%;
    background-color: #1d1c21;
    transform: translateY(99%);
  }
`;

export const Cutout = styled.img`
  position: absolute;
  width: 40%;
  max-width: 500px;
  right: 4%;
  /* transform: translate(50%, 0); */

  @media (max-width: 680px) {
    width: 70%;
    top: -10%;
    right: -15%;
  }
`;
