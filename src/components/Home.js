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
import c from "../images/logos/c.svg"
import css from "../images/logos/css.svg"
import heroku from "../images/logos/heroku.svg"
import html from "../images/logos/html.svg"
import jquery from "../images/logos/jquery.svg"
import js from "../images/logos/js.svg"
import linux from "../images/logos/linux.svg"
import postgresql from "../images/logos/postgresql.svg"
import rails from "../images/logos/rails.svg"

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
          techStack={[html, css, js]}
          link={"https://raychungno1.github.io/ML-Visualizer/search.html"}
        />
        <Project
          title={"Peer Evaluation Tool"}
          desc={
            "A feedback tool for projects. Use username \"s1@s.com\" and password \"123456\". Site may take a while on initial load."
          }
          img={peerEval}
          techStack={[rails, jquery, postgresql, heroku]}
          link={"https://pentapeereval.herokuapp.com/"}
        />
        <Project
          title={"Data Structs"}
          desc={
            "A library of data structures implemented in C, including linked lists, search trees, graphs, and more."
          }
          img={dataStructs}
          techStack={[c, linux]}
          link={"https://github.com/raychungno1/DataStructs"}
        />
      </Featured>
    </>
  );
};

export default Home;
