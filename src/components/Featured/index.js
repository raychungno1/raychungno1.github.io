import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fromDefaults, toDefaults, isElementInViewport } from "../../helpers";

// Styles
import { Wrapper, Content } from "./Featured.styles";

const Featured = ({ children }) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const header = element.querySelector(".f-header");
    if (isElementInViewport(header)) {
      gsap.from(header, { ...fromDefaults, delay: 1 });
    } else {
      gsap.fromTo(header, fromDefaults, {
        ...toDefaults,
        opacity: 0.8,
        scrollTrigger: { trigger: header, start: "bottom bottom" },
      });
    }
    if (isElementInViewport(element.querySelector(".featured__row"))) {
      gsap.from(element.querySelectorAll(".proj"), {
        ...fromDefaults,
        delay: 1,
        stagger: 0.05,
      });
    } else {
      gsap.fromTo(element.querySelectorAll(".proj"), fromDefaults, {
        ...toDefaults,
        stagger: 0.05,
        scrollTrigger: {
          trigger: element.querySelector(".proj"),
          start: "20% bottom" 
        },
      });
    }
  }, []);

  return (
    <Wrapper ref={ref} className="featured__container">
      <h1 className="f-header title">Featured Projects</h1>
      <Content className="featured__row">{children}</Content>
    </Wrapper>
  );
};

export default Featured;
