import React, { useEffect } from "react";
import { gsap } from "gsap";

// Styles
import { Wrapper, Content } from "./Featured.styles";

const Featured = ({ children }) => {

  useEffect(() => {
    gsap.from(".f-header", { opacity: 0, x: 100, duration: 1, ease: "power4.out", delay: 1 });
  });

  return (
    <Wrapper>
      <h1 className="f-header">Featured Projects</h1>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Featured;
