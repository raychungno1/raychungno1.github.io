import React from "react";

// Styles
import { Wrapper, Content } from "./Project.styles";

const Project = ({ title, desc }) => {
  return (
    <Wrapper>
      <Content>
        <div className="title-container"><h1>{title}</h1></div>
        <p>{desc}</p>
      </Content>
    </Wrapper>
  );
};

export default Project;
