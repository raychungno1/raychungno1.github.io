import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Images
import cutoutImg from "../../images/cutout.png";

// Styles
import {
  Wrapper,
  Background,
  Content,
  WaveBottom,
  WaveTop,
  Cutout,
} from "./Hero.styles";

const Hero = () => {
  const el = useRef();
  
  useEffect(() => {
    const bg = el.current.querySelector(".bg");
    const content = el.current.querySelector(".content");
    const waveB = el.current.querySelector(".waveBottom");
    const waveT = el.current.querySelector(".waveTop");

    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power4.inOut" },
    });

    tl.from(waveT, { y: -waveT.offsetHeight });
    tl.from(content, { opacity: 0, y: -waveT.offsetHeight / 2 }, "<");
    tl.from(waveB, { opacity: 0, y: -waveT.offsetHeight / 3 }, "<");
    tl.from(bg, { opacity: 0, y: -waveT.offsetHeight / 4 }, "<");

    setTimeout(() => {
      waveT.style.removeProperty("transform");
      content.style.removeProperty("transform");
      waveB.style.removeProperty("transform");
    }, 1000);

    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      content.style.top = `${value * 0.4}px`;
      waveB.style.bottom = `${value * -0.6}px`;
      bg.style.top = `${value * 0.9}px`;
      context.fillStyle = "#111111";
      context.fillRect(0, 0, canvas.width, canvas.height);
    });

    const canvas = el.current.querySelector("#matrix");
    const context = canvas.getContext("2d");
    canvas.width = bg.offsetWidth;
    canvas.height = bg.offsetHeight;
    context.fillStyle = "#111111";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const katakana =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const alphabet = katakana + latin + nums;

    const colSize = 30;
    const columns = canvas.width / colSize;
    const rainDrops = [];
    const fontSizes = [];

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = Math.floor((Math.random() * canvas.height) / colSize);
      fontSizes[x] = Math.floor(Math.random() * 24) + 8;
    }

    window.addEventListener("resize", () => {
      canvas.width = bg.offsetWidth;
      canvas.height = bg.offsetHeight;
    });

    const draw = () => {
      context.fillStyle = "#664317";

      for (let i = 0; i < rainDrops.length; i++) {
        context.font = `${fontSizes[i]}px monospace`;
        const text = alphabet.charAt(
          Math.floor(Math.random() * alphabet.length)
        );

        context.fillText(text, i * colSize, rainDrops[i] * colSize);
        rainDrops[i]++;

        if (rainDrops[i] * colSize > canvas.height) {
          context.fillStyle = "#111111";
          context.fillRect(i * colSize, 0, 32, canvas.height);
          context.fillStyle = "#664317";

          if (Math.random() > 0.9) {
            rainDrops[i] = 0;
            fontSizes[i] = Math.floor(Math.random() * 24) + 8;
          }
        }
      }
    };

    const fadeOut = () => {
      context.fillStyle = "rgba(17, 17, 17, 0.08)";
      context.fillRect(0, 0, canvas.width, canvas.height);
    };

    setInterval(draw, 150);
    setInterval(fadeOut, 30);
  });

  return (
    <Wrapper ref={el}>
      <Background className="bg">
        <canvas id="matrix"></canvas>
      </Background>
      <WaveBottom className="waveBottom" />
      <Content className="content">
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
