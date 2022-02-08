import React from "react";

// Components
import Hero from "./Hero";
import Featured from "./Featured";
import Project from "./Project";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured>
        <Project title={"This Is A Long Name"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
        <Project title={"Something Awesome"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
        <Project title={"Hello"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
      </Featured>
    </>
  );
};

export default Home;
