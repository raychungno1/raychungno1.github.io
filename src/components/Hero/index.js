import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Images
import cutoutImg from "../../images/cutout.png";

// Styles
import { Wrapper, Content, WaveBottom, WaveTop, Cutout } from "./Hero.styles";

// import
const Hero = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    // Target ALL descendants with the class of .box
    const cutout = el.current.querySelector(".cutout");
    const waveB = el.current.querySelector(".waveBottom");
    const waveT = el.current.querySelector(".waveTop");
    const name = el.current.querySelectorAll("h1");
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power4.inOut" },
    });
    tl.from(waveT, { y: -waveT.offsetHeight });
    tl.from(waveB, { opacity: 0, y: -waveB.offsetHeight / 3 }, "<.05");
    tl.from(cutout, { opacity: 0, x: -cutout.offsetWidth / 3 }, "<.05");
    tl.from(name, {opacity: 0, stagger: {each: 0.05}, x: cutout.offsetWidth }, "<.05")
    setTimeout(() => {
      waveT.removeAttribute("style");
      waveB.removeAttribute("style");
      cutout.removeAttribute("style");
    }, 1500);
  }, [q]);

  return (
    <Wrapper ref={el}>
      <WaveBottom className="waveBottom" />
      <Content>
        <div className="name">
            <h1>Ray</h1>
            <h1>Chung</h1>
        </div>
        <Cutout src={cutoutImg} alt="cutout" className="cutout" />
      </Content>
      <WaveTop className="waveTop" />
    </Wrapper>
  );
};

export default Hero;
