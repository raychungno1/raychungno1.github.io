import React, { useEffect } from "react";
import { gsap } from "gsap";

// Components
import Hero from "./Hero";
import Featured from "./Featured";
import Project from "./Project";

// Images
import aiMl from "../images/ai-ml.png";
import peerEval from "../images/peer-eval.jpg";
import dataStructs from "../images/data-structs.jpg";

const Home = () => {

  useEffect(() => {
    gsap.from(".proj", { stagger: 0.05, opacity: 0, x: 100, duration: 1, ease: "power4.out", delay: 1 });
  }, []);

  return (
    <>
      <Hero />
      <Featured>
        <Project
          title={"AI & ML Visualizer"}
          desc={
            "A showcase of popular Artificial Intelligence and Machine Learning algorithms."
          }
          img={aiMl}
        />
        <Project
          title={"Peer Evaluation Tool"}
          desc={
            "A feedback tool for group projects. Use username \"s1@s.com\" and password \"123456\"."
          }
          img={peerEval}
        />
        <Project
          title={"Data Structs"}
          desc={
            "A library of data structures implemented in C, including linked lists, search trees, graphs, and more."
          }
          img={dataStructs}
        />
      </Featured>
    </>
  );
};

export default Home;
