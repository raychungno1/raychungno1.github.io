import React from "react";

// Styles
import { Wrapper, Image, Content } from "./Project.styles";

const Project = ({ title, desc }) => {
  return (
    <Wrapper className="proj">
      <Image></Image>
      <Content>
        <div className="title-container">
          <h1>{title}</h1>
        </div>
        <p>{desc}</p>
      </Content>
    </Wrapper>
  );
};

export default Project;
