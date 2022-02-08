import React, { useEffect } from "react";
import { gsap } from "gsap";

// Components
import Hero from "./Hero";
import Featured from "./Featured";
import Project from "./Project";

const Home = () => {

  useEffect(() => {
    gsap.from(".proj", { stagger: 0.05, opacity: 0, x: 100, duration: 1, ease: "power4.out", delay: 1 });
  });

  return (
    <>
      <Hero />
      <Featured>
        <Project
          title={"This Is A Long Name"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <Project
          title={"Something Awesome"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <Project
          title={"Hello"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
      </Featured>
    </>
  );
};

export default Home;
