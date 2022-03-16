import React from "react";

// Styles
import { Wrapper, Image, Content, Tech } from "./Project.styles";

const Project = ({ title, desc, img, techStack, link }) => {
  return (
    <a href={link}>
      <Wrapper className="proj">
        <Image src={img} alt=""></Image>
        <Content>
          <div className="title-container">
            <h1>{title}</h1>
          </div>
          <p>{desc}</p>
          <div className="logos">
            {techStack.map((tech) => (
              <Tech src={tech} />
            ))}
          </div>
        </Content>
      </Wrapper>
    </a>
  );
};

export default Project;
