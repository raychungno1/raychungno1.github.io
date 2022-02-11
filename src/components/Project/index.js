import React from "react";

// Styles
import { Wrapper, Image, Content } from "./Project.styles";

const Project = ({ title, desc, img, techStack }) => {
  return (
    <Wrapper className="proj">
      <Image src={img}></Image>
      <Content>
        <div className="title-container">
          <h1>{title}</h1>
        </div>
        <p>{desc}</p>
        <div className="logos">Tech</div>
      </Content>
    </Wrapper>
  );
};

export default Project;
